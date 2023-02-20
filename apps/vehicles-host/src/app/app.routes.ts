import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feature-b',
    loadChildren: () =>
      import('feature-b/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'feature-a',
    loadChildren: () =>
      import('feature-a/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    loadChildren: () => import('@vehicles-mfe/home').then(m => m.HomeModule),
  },
];
