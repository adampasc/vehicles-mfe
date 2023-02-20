import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
@NgModule({
  imports: [
    CommonModule,
    PorscheDesignSystemModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
