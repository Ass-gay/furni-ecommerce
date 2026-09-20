import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chose } from './chose';

describe('Chose', () => {
  let component: Chose;
  let fixture: ComponentFixture<Chose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chose],
    }).compileComponents();

    fixture = TestBed.createComponent(Chose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
