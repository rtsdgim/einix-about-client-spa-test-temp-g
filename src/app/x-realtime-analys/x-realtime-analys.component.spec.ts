import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XRealtimeAnalysComponent } from './x-realtime-analys.component';

describe('XRealtimeAnalysComponent', () => {
  let component: XRealtimeAnalysComponent;
  let fixture: ComponentFixture<XRealtimeAnalysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XRealtimeAnalysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XRealtimeAnalysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
