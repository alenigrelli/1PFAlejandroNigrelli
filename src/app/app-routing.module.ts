import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaAlumnosComponent } from './components/consulta-alumnos/consulta-alumnos.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';

const routes: Routes = [
  { path: 'listaAlumnos', component: ListaAlumnosComponent },
  { path: 'consultaAlumnos', component: ConsultaAlumnosComponent },
  { path: 'listaCursos', component: ListaCursosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }