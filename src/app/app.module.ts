import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
@NgModule({
  declarations: [
    AppComponent,
    ABMalumnosComponent,
    ListaAlumnosComponent,
    NavbarComponent,
    ToolbarComponent,
    NombreApellidoPipe,
    TamanoletraDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [ServicioAlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
