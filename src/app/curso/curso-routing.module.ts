import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';

const routes: Routes = [
  {path: 'cursos',
    children: [
      {path: 'listaCursos', canActivate: [AuthGuard], component: ListaCursosComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
