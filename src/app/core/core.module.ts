import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosCursoService } from './servicios/servicios-curso.service';
import { ServicioAlumnoService } from './servicios/servicio-alumno.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    ServiciosCursoService,
    ServicioAlumnoService
  ]
})
export class CoreModule { }
