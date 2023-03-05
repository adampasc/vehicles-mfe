import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomponentWrapperComponent } from './webcomponent-wrapper.component';

describe('WebcomponentWrapperComponent', () => {
  let component: WebcomponentWrapperComponent;
  let fixture: ComponentFixture<WebcomponentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebcomponentWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebcomponentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
