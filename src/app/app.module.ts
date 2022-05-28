import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AbmClasesComponent } from './components/abm-clases/abm-clases.component';
import { AbmProfesoresComponent } from './components/abm-profesores/abm-profesores.component';
import { SharedModule } from './shared/shared.module';
import { AlumnoModule } from './alumno/alumno.module';
import { CursoModule } from './curso/curso.module';
import { InscripcionModule } from './inscripcion/inscripcion.module';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './components/login/login.component';
import { UsuarioModule } from './usuario/usuario.module';
import { ROOT_REDUCERS } from './state/app.state';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { authFeatureKey, loginReducer } from './state/reducers/login.reducer';
import { Ng2IziToastModule } from 'ng2-izitoast';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AbmClasesComponent,
    AbmProfesoresComponent,
    LoginComponent,
  ],
  imports: [
    Ng2IziToastModule,
    InscripcionModule,
    CursoModule,
    AlumnoModule,
    UsuarioModule,
    SharedModule,
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(authFeatureKey, loginReducer),
    StoreDevtoolsModule.instrument({ name: "Prueba login"}),
  ],
  providers: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
