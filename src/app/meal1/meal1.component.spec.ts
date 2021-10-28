import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meal1Component } from './meal1.component';

describe('Meal1Component', () => {
  let component: Meal1Component;
  let fixture: ComponentFixture<Meal1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meal1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Meal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
