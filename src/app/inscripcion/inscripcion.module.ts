import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { InscripcionFormComponent } from './inscripcion-form/inscripcion-form.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { InscripcionRoutingModule } from './inscripcion-routing.module';


@NgModule({
  declarations: [
    InscripcionComponent,
    InscripcionFormComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    CommonModule,
    InscripcionRoutingModule
  ],
  exports: [InscripcionFormComponent]
})
export class InscripcionModule { }
