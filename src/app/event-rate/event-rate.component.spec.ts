import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRateComponent } from './event-rate.component';

describe('EventRateComponent', () => {
  let component: EventRateComponent;
  let fixture: ComponentFixture<EventRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventRateComponent]
    });
    fixture = TestBed.createComponent(EventRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
