import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snack1Component } from './snack1.component';

describe('Snack1Component', () => {
  let component: Snack1Component;
  let fixture: ComponentFixture<Snack1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Snack1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Snack1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
