import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAssign } from './pipes-assign';

describe('PipesAssign', () => {
  let component: PipesAssign;
  let fixture: ComponentFixture<PipesAssign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesAssign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesAssign);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
