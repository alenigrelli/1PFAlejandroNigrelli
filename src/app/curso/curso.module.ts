import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { CoreModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AbmCursosComponent } from './abm-cursos/abm-cursos.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { AlumnoModule } from '../alumno/alumno.module';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';



@NgModule({
  declarations: [
    AbmCursosComponent,
    DetalleCursoComponent,
    ListaCursosComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    AlumnoModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    ListaCursosComponent
  ]
})
export class CursoModule { }
