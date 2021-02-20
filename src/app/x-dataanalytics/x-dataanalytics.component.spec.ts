import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XDataanalyticsComponent } from './x-dataanalytics.component';

describe('XDataanalyticsComponent', () => {
  let component: XDataanalyticsComponent;
  let fixture: ComponentFixture<XDataanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XDataanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XDataanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
