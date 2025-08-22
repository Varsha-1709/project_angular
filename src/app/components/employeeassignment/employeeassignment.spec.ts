import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Employeeassignment } from './employeeassignment';

describe('Employeeassignment', () => {
  let component: Employeeassignment;
  let fixture: ComponentFixture<Employeeassignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Employeeassignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Employeeassignment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
