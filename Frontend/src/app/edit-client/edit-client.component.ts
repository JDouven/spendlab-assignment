import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router, RouterModule } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap, tap } from 'rxjs';
import {
  ClientFormComponent,
  UpdateClient,
} from '../client-form/client-form.component';
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
  selector: 'app-edit-client',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    ClientFormComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './edit-client.component.html',
})
export class EditClientComponent extends ComponentStore<State> {
  @Input() set id(id: string) {
    this.loadClient(parseInt(id));
  }

  constructor(
    private clientService: ClientService,
    private router: Router
  ) {
    super(initialState);
  }

  readonly loadClient = this.effect((trigger$: Observable<number>) =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(id =>
        this.clientService.getClient(id).pipe(
          tapResponse(
            client => this.patchState({ loading: false, client }),
            () => {
              this.patchState({ loading: false });
              // TODO: handle error
            }
          )
        )
      )
    )
  );

  readonly updateClient = this.effect((trigger$: Observable<UpdateClient>) =>
    trigger$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(client =>
        this.clientService.updateClient(client).pipe(
          tapResponse(
            client => {
              this.patchState({ loading: false });
              this.router.navigate(['/client', client.id]);
            },
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
