import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { abmalumnosComponent } from './abmalumnos/abmalumnos.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultaAlumnosComponent } from './consulta-alumnos/consulta-alumnos.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    abmalumnosComponent,
    ConsultaAlumnosComponent,
    ListaAlumnosComponent,
    ConsultaAlumnosComponent,
    DetalleAlumnoComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    ListaAlumnosComponent
  ]
})
export class AlumnoModule { }
