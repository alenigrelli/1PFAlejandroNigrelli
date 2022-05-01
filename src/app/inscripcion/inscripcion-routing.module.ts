import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscripcionRoutingModule { }
