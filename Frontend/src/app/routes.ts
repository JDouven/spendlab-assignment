import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./clients/clients.component').then(mod => mod.ClientsComponent),
  },
  {
    path: 'client/new',
    loadComponent: () =>
      import('./new-client/new-client.component').then(
        mod => mod.NewClientComponent
      ),
  },
  {
    path: 'client/:id',
    loadComponent: () =>
      import('./client-detail/client-detail.component').then(
        mod => mod.ClientDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
