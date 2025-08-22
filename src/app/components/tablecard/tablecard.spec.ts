import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablecard } from './tablecard';

describe('Tablecard', () => {
  let component: Tablecard;
  let fixture: ComponentFixture<Tablecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
