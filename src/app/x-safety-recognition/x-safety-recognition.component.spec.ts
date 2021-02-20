import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSafetyRecognitionComponent } from './x-safety-recognition.component';

describe('XSafetyRecognitionComponent', () => {
  let component: XSafetyRecognitionComponent;
  let fixture: ComponentFixture<XSafetyRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSafetyRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSafetyRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
