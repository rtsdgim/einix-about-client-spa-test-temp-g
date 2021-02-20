import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSaferAdminDetailComponent } from './x-safer-admin-detail.component';

describe('XSaferAdminDetailComponent', () => {
  let component: XSaferAdminDetailComponent;
  let fixture: ComponentFixture<XSaferAdminDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSaferAdminDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSaferAdminDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
