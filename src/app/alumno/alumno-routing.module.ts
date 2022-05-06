import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ConsultaAlumnosComponent } from './consulta-alumnos/consulta-alumnos.component';
import { AuthGuard } from '../core/auth.guard';

const routes: Routes = [
  {path: 'alumnos',
    children: [
      { path: 'consultaAlumnos', canActivate: [AuthGuard],component: ConsultaAlumnosComponent },
      {path: 'listaAlumnos', canActivate: [AuthGuard], component: ListaAlumnosComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoRoutingModule { }
