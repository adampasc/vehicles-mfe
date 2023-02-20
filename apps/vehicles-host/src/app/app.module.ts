import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HomeModule } from '@vehicles-mfe/home';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { MainComponent } from '../components/main/main.component';

@NgModule({
  declarations: [AppComponent, MainComponent],
  exports: [MainComponent],
  imports: [
    BrowserModule,
    HomeModule,
    PorscheDesignSystemModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
