import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiffin1Component } from './tiffin1.component';

describe('Tiffin1Component', () => {
  let component: Tiffin1Component;
  let fixture: ComponentFixture<Tiffin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tiffin1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tiffin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
