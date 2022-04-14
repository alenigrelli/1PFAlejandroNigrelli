import { TestBed } from '@angular/core/testing';

import { ServiciosCursoService } from './servicios-curso.service';

describe('ServiciosCursoService', () => {
  let service: ServiciosCursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosCursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
