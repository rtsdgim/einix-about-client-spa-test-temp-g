import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSaferComponent } from './x-safer.component';

describe('XSaferComponent', () => {
  let component: XSaferComponent;
  let fixture: ComponentFixture<XSaferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSaferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSaferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
