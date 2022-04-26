import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosCursoService } from './servicios/servicios-curso.service';
import { ServicioAlumnoService } from './servicios/servicio-alumno.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [ServicioAlumnoService, ServiciosCursoService]
})
export class CoreModule { }
