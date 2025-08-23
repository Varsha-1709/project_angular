import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Empcrud } from './empcrud';

describe('Empcrud', () => {
  let component: Empcrud;
  let fixture: ComponentFixture<Empcrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Empcrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Empcrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
