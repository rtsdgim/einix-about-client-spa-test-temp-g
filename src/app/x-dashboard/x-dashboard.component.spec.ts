import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XDashboardComponent } from './x-dashboard.component';

describe('XDashboardComponent', () => {
  let component: XDashboardComponent;
  let fixture: ComponentFixture<XDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
