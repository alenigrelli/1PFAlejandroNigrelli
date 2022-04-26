import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { StandardbuttonDirective } from './directivas/standardbutton.directive';
import { Tamanoletra } from './directivas/tamanoletra.directive';



@NgModule({
  declarations: [
    NombreApellidoPipe, StandardbuttonDirective, Tamanoletra
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NombreApellidoPipe, StandardbuttonDirective, Tamanoletra
  ]
})
export class SharedModule { }