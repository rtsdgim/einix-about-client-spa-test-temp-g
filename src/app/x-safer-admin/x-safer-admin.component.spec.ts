import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XSaferAdminComponent } from './x-safer-admin.component';

describe('XSaferAdminComponent', () => {
  let component: XSaferAdminComponent;
  let fixture: ComponentFixture<XSaferAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XSaferAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XSaferAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
