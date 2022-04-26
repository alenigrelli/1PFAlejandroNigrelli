import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosCursoService } from './servicios/servicios-curso.service';
import { ServicioAlumnoService } from './servicios/servicio-alumno.service';
import { SharedModule } from '../shared/shared.module';
import { toolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    toolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[toolbarComponent],
  providers: [ServicioAlumnoService, ServiciosCursoService, toolbarComponent]
})
export class CoreModule { }
