import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSelfieComponent } from './x-selfie.component';

describe('XSelfieComponent', () => {
  let component: XSelfieComponent;
  let fixture: ComponentFixture<XSelfieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSelfieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
