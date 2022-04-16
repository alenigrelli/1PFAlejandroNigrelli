import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ABMalumnosComponent } from './components/abmalumnos/abmalumnos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { MaterialModule } from './externalModule/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { TamanoletraDirective } from './directivas/tamanoletra.directive';
import { ServicioAlumnoService } from './servicios/servicio-alumno.service';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { ServiciosCursoService } from './servicios/servicios-curso.service';
import { ConsultaAlumnosComponent } from './components/consulta-alumnos/consulta-alumnos.component';
import { AbmCursosComponent } from './components/abm-cursos/abm-cursos.component';
import { AppRoutingModule } from './app-routing.module';
import { StandardbuttonDirective } from './directivas/standardbutton.directive';
import { AbmClasesComponent } from './components/abm-clases/abm-clases.component';
import { AbmProfesoresComponent } from './components/abm-profesores/abm-profesores.component';
@NgModule({
  declarations: [
    AppComponent,
    ABMalumnosComponent,
    ListaAlumnosComponent,
    NavbarComponent,
    ToolbarComponent,
    NombreApellidoPipe,
    TamanoletraDirective,
    ListaCursosComponent,
    ConsultaAlumnosComponent,
    AbmCursosComponent,
    StandardbuttonDirective,
    AbmClasesComponent,
    AbmProfesoresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServicioAlumnoService, ServiciosCursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
