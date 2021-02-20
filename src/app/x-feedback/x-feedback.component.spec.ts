import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XFeedbackComponent } from './x-feedback.component';

describe('XFeedbackComponent', () => {
  let component: XFeedbackComponent;
  let fixture: ComponentFixture<XFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
