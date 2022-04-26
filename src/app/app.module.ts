import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './externalModule/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { toolbarComponent } from './components/toolbar/toolbar.component';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import { ListaCursosComponent } from './curso/lista-cursos/lista-cursos.component';
import { AbmCursosComponent } from './curso/abm-cursos/abm-cursos.component';
import { AppRoutingModule } from './app-routing.module';
import { AbmClasesComponent } from './components/abm-clases/abm-clases.component';
import { AbmProfesoresComponent } from './components/abm-profesores/abm-profesores.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { InscripcionFormComponent } from './components/inscripcion-form/inscripcion-form.component';
import { DetalleCursoComponent } from './curso/detalle-curso/detalle-curso.component';
import { SharedModule } from './shared/shared.module';
import { AlumnoModule } from './alumno/alumno.module';
import { CursoModule } from './curso/curso.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    toolbarComponent,
    AbmClasesComponent,
    AbmProfesoresComponent,
    InscripcionComponent,
    InscripcionFormComponent,
  ],
  imports: [
    CursoModule,
    AlumnoModule,
    SharedModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
