import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HomeModule } from '@vehicles-mfe/home';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { MainComponent } from '../components/main/main.component';
import { WebcomponentWrapperComponent } from '../components/webcomponent-wrapper/webcomponent-wrapper.component';
import { LazyElementsModule } from '@angular-extensions/elements';
import {
  ModuleFederationWrapperComponent
} from '../components/module-federation-wrapper/module-federation-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WebcomponentWrapperComponent,
    ModuleFederationWrapperComponent
  ],
  exports: [MainComponent],
  imports: [
    BrowserModule,
    HomeModule,
    PorscheDesignSystemModule,
    LazyElementsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
