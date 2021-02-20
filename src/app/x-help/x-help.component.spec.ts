import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XHelpComponent } from './x-help.component';

describe('XHelpComponent', () => {
  let component: XHelpComponent;
  let fixture: ComponentFixture<XHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
