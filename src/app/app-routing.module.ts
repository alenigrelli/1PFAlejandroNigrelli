import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaAlumnosComponent } from './alumno/consulta-alumnos/consulta-alumnos.component';
import { InscripcionComponent } from './inscripcion/inscripcion/inscripcion.component';
import { ListaAlumnosComponent } from './alumno/lista-alumnos/lista-alumnos.component';
import { ListaCursosComponent } from './curso/lista-cursos/lista-cursos.component';

const routes: Routes = [
  {
    path: 'alumnos',
    loadChildren: () => import('./alumno/alumno.module').then((m) => m.AlumnoModule)
  },
  { path: 'listaAlumnos', component: ListaAlumnosComponent },
  { path: 'listaCursos', component: ListaCursosComponent },
  {path: 'inscripcion', component: InscripcionComponent},
  { path: '', component: ListaAlumnosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }