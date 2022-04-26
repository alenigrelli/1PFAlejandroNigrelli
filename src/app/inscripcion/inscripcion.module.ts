import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { InscripcionFormComponent } from './inscripcion-form/inscripcion-form.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    InscripcionComponent,
    InscripcionFormComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    CommonModule
  ],
  exports: [InscripcionFormComponent]
})
export class InscripcionModule { }
