import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSettingsComponent } from './x-settings.component';

describe('XSettingsComponent', () => {
  let component: XSettingsComponent;
  let fixture: ComponentFixture<XSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
