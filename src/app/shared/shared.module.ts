import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';



@NgModule({
  declarations: [
    NombreApellidoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NombreApellidoPipe
  ]
})
export class SharedModule { }