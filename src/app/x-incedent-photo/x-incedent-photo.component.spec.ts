import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XIncedentPhotoComponent } from './x-incedent-photo.component';

describe('XIncedentPhotoComponent', () => {
  let component: XIncedentPhotoComponent;
  let fixture: ComponentFixture<XIncedentPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XIncedentPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XIncedentPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
