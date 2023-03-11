import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFederationWrapperComponent } from './module-federation-wrapper.component';

describe('ModuleFederationWrapperComponent', () => {
  let component: ModuleFederationWrapperComponent;
  let fixture: ComponentFixture<ModuleFederationWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleFederationWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModuleFederationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
