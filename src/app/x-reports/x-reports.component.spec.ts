import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XReportsComponent } from './x-reports.component';

describe('XReportsComponent', () => {
  let component: XReportsComponent;
  let fixture: ComponentFixture<XReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
