import { TestBed } from '@angular/core/testing';

import { AndroidSensorService } from './android-sensor.service';

describe('AndroidSensorService', () => {
  let service: AndroidSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AndroidSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
