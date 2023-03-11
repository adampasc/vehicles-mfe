import { Route } from '@angular/router';
import { loadRemoteModule } from '@nrwl/angular/mf';

export const appRoutes: Route[] = [
  // static module
  {
    path: 'feature-b',
    loadChildren: () =>
      import('feature-b/Module').then((m) => m.RemoteEntryModule),
  },
  // dynamic federation
  {
    path: 'feature-a',
    loadChildren: () =>
      loadRemoteModule('feature-a', 'RemoteEntryModule').then(
        (m) => m.RemoteEntryModule
      )
  },
  // just a good old nx-library
  {
    path: '',
    loadChildren: () => import('@vehicles-mfe/home').then(m => m.HomeModule),
  },
];
