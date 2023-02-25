import { Component } from '@angular/core';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';


@Component({
  selector: 'vehicles-mfe-my-feature',
  templateUrl: './my-feature.component.html',
  styleUrls: ['./my-feature.component.scss'],
  imports: [PorscheDesignSystemModule],
  standalone: true
})
export class MyFeatureComponent {}
