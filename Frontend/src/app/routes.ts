import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./clients/clients.component').then(mod => mod.ClientsComponent),
  },
  {
    path: 'client/:id',
    loadComponent: () =>
      import('./client-detail/client-detail.component').then(
        mod => mod.ClientDetailComponent
      ),
  },
  {
    path: 'client/:id/edit',
    loadComponent: () =>
      import('./edit-client/edit-client.component').then(
        mod => mod.EditClientComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
