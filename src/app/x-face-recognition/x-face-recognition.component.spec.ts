import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XFaceRecognitionComponent } from './x-face-recognition.component';

describe('XFaceRecognitionComponent', () => {
  let component: XFaceRecognitionComponent;
  let fixture: ComponentFixture<XFaceRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XFaceRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XFaceRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
