import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { toolbarComponent } from './components/toolbar/toolbar.component';
import { CoreModule, FlexLayoutModule } from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AbmClasesComponent } from './components/abm-clases/abm-clases.component';
import { AbmProfesoresComponent } from './components/abm-profesores/abm-profesores.component';
import { SharedModule } from './shared/shared.module';
import { AlumnoModule } from './alumno/alumno.module';
import { CursoModule } from './curso/curso.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    toolbarComponent,
    AbmClasesComponent,
    AbmProfesoresComponent,
  ],
  imports: [
    InscripcionModule,
    CursoModule,
    AlumnoModule,
    SharedModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
