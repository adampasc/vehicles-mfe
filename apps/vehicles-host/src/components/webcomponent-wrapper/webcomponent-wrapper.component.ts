import { Component } from '@angular/core';
import { TabChangeEvent } from '@porsche-design-system/components-angular';

@Component({
  selector: 'vehicles-mfe-webcomponent-wrapper',
  templateUrl: './webcomponent-wrapper.component.html',
  styleUrls: ['./webcomponent-wrapper.component.scss'],
})
export class WebcomponentWrapperComponent {
  elementAUrl = 'http://localhost:4301/main.js' // can come from environments later
  elementBUrl = 'http://localhost:4302/main.js' // can come from environments later
  title = 'host';

  tabIndex: number = 0;
  tabPanels: string[] = ['Component A', 'Component B'];

  onTabChange(e: CustomEvent<TabChangeEvent>) {
    this.tabIndex = e.detail.activeTabIndex;
  }

}
