import { setRemoteDefinitions } from '@nrwl/angular/mf';

import('./module-federation.config')
  .then((res) => res.config)
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
