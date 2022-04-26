import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { abmalumnosComponent } from './abmalumnos/abmalumnos.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConsultaAlumnosComponent } from './consulta-alumnos/consulta-alumnos.component';
import { toolbarComponent } from '../components/toolbar/toolbar.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { CoreModule } from '@angular/flex-layout';
import { AppModule } from '../app.module';
import { DetalleAlumnoComponent } from './detalle-alumno/detalle-alumno.component';



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
