import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListypeComponent } from './listype.component';

describe('ListypeComponent', () => {
  let component: ListypeComponent;
  let fixture: ComponentFixture<ListypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListypeComponent]
    });
    fixture = TestBed.createComponent(ListypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
