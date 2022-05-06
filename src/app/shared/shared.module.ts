import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { StandardbuttonDirective } from './directivas/standardbutton.directive';
import { Tamanoletra } from './directivas/tamanoletra.directive';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    NombreApellidoPipe, StandardbuttonDirective, Tamanoletra
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NombreApellidoPipe, StandardbuttonDirective, Tamanoletra, MaterialModule
  ]
})
export class SharedModule { }