import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XTransportRecognitionComponent } from './x-transport-recognition.component';

describe('XTransportRecognitionComponent', () => {
  let component: XTransportRecognitionComponent;
  let fixture: ComponentFixture<XTransportRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XTransportRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XTransportRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
