import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productsassign } from './productsassign';

describe('Productsassign', () => {
  let component: Productsassign;
  let fixture: ComponentFixture<Productsassign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productsassign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productsassign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
