import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./clients/clients.component').then(mod => mod.ClientsComponent),
  },
];
