import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalAssign } from './signal-assign';

describe('SignalAssign', () => {
  let component: SignalAssign;
  let fixture: ComponentFixture<SignalAssign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalAssign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalAssign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
