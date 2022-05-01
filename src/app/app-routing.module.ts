import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaAlumnosComponent } from './alumno/consulta-alumnos/consulta-alumnos.component';
import { InscripcionComponent } from './inscripcion/inscripcion/inscripcion.component';
import { ListaAlumnosComponent } from './alumno/lista-alumnos/lista-alumnos.component';
import { ListaCursosComponent } from './curso/lista-cursos/lista-cursos.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './core/auth.guard';
import { NoAuthGuard } from './core/noAuth.guard';

const routes: Routes = [
  {
    path: 'alumnos',
    loadChildren: () => import('./alumno/alumno.module').then((m) => m.AlumnoModule)
  },
  
  { 
    path: 'cursos', loadChildren: () => import('./curso/curso.module').then(m => m.CursoModule)
  },

  { 
    path: 'inscripcion', loadChildren: () => import('./inscripcion/inscripcion.module').then(m => m.InscripcionModule)
  },

  {path: '', component: ListaAlumnosComponent },

  {path: 'login', canActivate: [NoAuthGuard], component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }