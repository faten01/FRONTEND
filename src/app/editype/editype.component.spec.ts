import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditypeComponent } from './editype.component';

describe('EditypeComponent', () => {
  let component: EditypeComponent;
  let fixture: ComponentFixture<EditypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditypeComponent]
    });
    fixture = TestBed.createComponent(EditypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
