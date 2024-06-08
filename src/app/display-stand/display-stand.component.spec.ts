import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStandComponent } from './display-stand.component';

describe('DisplayStandComponent', () => {
  let component: DisplayStandComponent;
  let fixture: ComponentFixture<DisplayStandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayStandComponent]
    });
    fixture = TestBed.createComponent(DisplayStandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
