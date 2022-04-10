import { TestBed } from '@angular/core/testing';

import { ServicioAlumnoService } from './servicio-alumno.service';

describe('ServicioAlumnoService', () => {
  let service: ServicioAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
