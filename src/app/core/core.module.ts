import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosCursoService } from './servicios/servicios-curso.service';
import { ServicioAlumnoService } from './servicios/servicio-alumno.service';
import { SharedModule } from '../shared/shared.module';
import { toolbarComponent } from './toolbar/toolbar.component';
import { LoginService } from './servicios/login.service';
import { UsuarioService } from './servicios/usuario.service';



@NgModule({
  declarations: [
    toolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[toolbarComponent],
  providers: [ServicioAlumnoService, ServiciosCursoService, LoginService, UsuarioService]
})
export class CoreModule { }
