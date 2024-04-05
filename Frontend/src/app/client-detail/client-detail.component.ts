import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, tap } from 'rxjs';
import { Client } from '../models';
import { ClientService } from '../services/client.service';

type LoadedState = {
  client: Client;
  loading: false;
};

type LoadingState = {
  client: undefined;
  loading: true;
};

type State = LoadedState | LoadingState;

const initialState: State = {
  client: undefined,
  loading: true,
};

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './client-detail.component.html',
})
export class ClientDetailComponent extends ComponentStore<State> {
  @Input() set id(id: string) {
    this.loadClient(parseInt(id));
  }

  constructor(private clientService: ClientService) {
    super(initialState);
  }

  private readonly loadClient = this.effect((trigger$: Observable<number>) =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(id =>
        this.clientService.getClient(id).pipe(
          tapResponse(
            client =>
              this.patchState({
                client,
                loading: false,
              }),
            () => {
              this.patchState({ loading: false });
              // TODO: handle error
            }
          )
        )
      )
    )
  );
}
