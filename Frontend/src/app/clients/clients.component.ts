import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, tap } from 'rxjs';
import { Client } from '../models';
import { ClientCardComponent } from './client-card/client-card.component';
import { ClientService } from './client.service';

type State = {
  clients: Client[];
  totalCount: number;
  loading: boolean;
  lastRetrievedPage: number;
};

const initialState: State = {
  clients: [],
  totalCount: 0,
  loading: false,
  lastRetrievedPage: 0,
};

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, ClientCardComponent],
  templateUrl: './clients.component.html',
})
export class ClientsComponent extends ComponentStore<State> {
  readonly $vm = this.select(({ clients, loading }) => ({ clients, loading }));

  constructor(private clientService: ClientService) {
    super(initialState);

    this.loadClients();
  }

  onLoadMore() {
    this.loadMoreClients();
  }

  private readonly loadClients = this.effect(($trigger: Observable<void>) =>
    $trigger.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.clientService.getClients(0).pipe(
          tapResponse(
            clients =>
              this.patchState({
                clients,
                loading: false,
                lastRetrievedPage: 0,
              }),
            () => this.patchState({ loading: false })
          )
        )
      )
    )
  );

  private readonly loadMoreClients = this.effect(($trigger: Observable<void>) =>
    $trigger.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        this.clientService.getClients(this.get().lastRetrievedPage + 1).pipe(
          tapResponse(
            clients =>
              this.patchState(state => ({
                clients: [...state.clients, ...clients],
                loading: false,
                lastRetrievedPage: state.lastRetrievedPage + 1,
              })),
            () => this.patchState({ loading: false })
          )
        )
      )
    )
  );
}