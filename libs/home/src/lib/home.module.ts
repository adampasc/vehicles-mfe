import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';

@NgModule({
  imports: [CommonModule, PorscheDesignSystemModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
