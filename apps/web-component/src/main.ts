import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { MyFeatureComponent } from './app/my-feature/my-feature.component';
(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
    ],
  });

  const featureElement = createCustomElement(MyFeatureComponent, {
    injector: app.injector,
  });
  customElements.define('my-feature', featureElement);
})();
