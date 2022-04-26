import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAlumnosComponent } from './consulta-alumnos.component';

describe('ConsultaAlumnosComponent', () => {
  let component: ConsultaAlumnosComponent;
  let fixture: ComponentFixture<ConsultaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
