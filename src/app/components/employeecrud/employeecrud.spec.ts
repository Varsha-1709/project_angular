import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeecrud } from './employeecrud';

describe('Employeecrud', () => {
  let component: Employeecrud;
  let fixture: ComponentFixture<Employeecrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeecrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeecrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
