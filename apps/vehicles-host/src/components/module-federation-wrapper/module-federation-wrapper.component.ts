import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  createNgModule,
  EventEmitter,
  Injector,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { loadRemoteModule } from '@nrwl/angular/mf';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';

export interface RemoteComponent {
  mfeData: any;
  mfeEvent: EventEmitter<any>;
}

export interface EnvironmentRemote {
  remoteName: string;
  remoteEntry: string;
  exposedModule: string;
  entryComponent: string;
}

export type RenderRemoteModuleOptions = EnvironmentRemote & {
  entryComponent?: string;
};

@Component({
  selector: 'vehicles-mfe-module-federation-wrapper',
  templateUrl: './module-federation-wrapper.component.html',
  styleUrls: ['./module-federation-wrapper.component.scss'],
})
export class ModuleFederationWrapperComponent implements OnInit {
@Component({
  selector: 'mpo-module-proxy',
  templateUrl: './module-federation-wrapper.component.html',
  standalone: true,
  imports: [CommonModule],
})

  @Input() module: RenderRemoteModuleOptions | undefined;

  @Input() data: any;

  data$ = new BehaviorSubject<any>(null);
  /* istanbul ignore next  */

  @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef | undefined;

  remoteComponent: ComponentRef<RemoteComponent> | null = null;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private injector: Injector,
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.module) {
      // load the remote module via its name
      const remoteModule = await loadRemoteModule(this.module.remoteName, this.module.exposedModule);
      const loadedModule = remoteModule[this.module.exposedModule];
      const moduleRef = createNgModule(loadedModule, this.injector);

      // Create a component from the static method of the remote module declaring its components
      const entryComponent = (loadedModule as any).getSharedComponents()[this.module.entryComponent];

      // assign the module to its placeholder
      if (this.viewContainer) {
        this.remoteComponent = this.viewContainer.createComponent<RemoteComponent>(entryComponent, {
          ngModuleRef: moduleRef,
        });

        // assign data and listen for events
        this.remoteComponent.instance.mfeData = {};
        this.remoteComponent.instance.mfeEvent?.subscribe((event: Event) => {
          console.log('Remote Component fired an event', event)
        });
      }
    }
  }
}

