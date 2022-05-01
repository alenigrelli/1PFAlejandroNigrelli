import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { InscripcionComponent } from './inscripcion/inscripcion.component';


const routes: Routes = [
  {path: 'inscripcion',
    children: [
      {path: 'inscripcionCurso', canActivate: [AuthGuard], component: InscripcionComponent}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InscripcionRoutingModule { }
