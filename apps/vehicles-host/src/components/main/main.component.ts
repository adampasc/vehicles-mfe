import { Component } from '@angular/core';
import {config} from '../../module-federation.config';
import { RenderRemoteModuleOptions } from '../module-federation-wrapper/module-federation-wrapper.component';

@Component({
  selector: 'vehicles-mfe-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  remoteModule: RenderRemoteModuleOptions = {
    exposedModule: 'ExposedModule',
    remoteEntry: config['remote-module'],
    remoteName: 'remote-module',
    entryComponent: 'ExposedComponent'
  }
}
