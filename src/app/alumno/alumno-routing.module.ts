import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { ConsultaAlumnosComponent } from './consulta-alumnos/consulta-alumnos.component';

const routes: Routes = [
  {path: '',
    children: [
      { path: 'consultaAlumnos', component: ConsultaAlumnosComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnoRoutingModule { }
