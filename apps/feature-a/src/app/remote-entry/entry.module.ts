import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { MainComponent } from '../main/main.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';

@NgModule({
  declarations: [RemoteEntryComponent, MainComponent],
  imports: [
    PorscheDesignSystemModule,
    CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {
  static getSharedComponents() {
    return {
      'MainComponent': MainComponent
    };
  }
}
