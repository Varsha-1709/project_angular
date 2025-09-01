import { TestBed } from '@angular/core/testing';

import { EmployeeSubject } from './employee-subject';

describe('EmployeeSubject', () => {
  let service: EmployeeSubject;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSubject);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
