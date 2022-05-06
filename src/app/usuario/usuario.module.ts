import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { AbmusuarioComponent } from './abmusuario/abmusuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { DetalleUsuariosComponent } from './detalle-usuarios/detalle-usuarios.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AbmusuarioComponent,
    ListaUsuariosComponent,
    DetalleUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    CoreModule,
    SharedModule
  ],
  exports:[
    ListaUsuariosComponent
  ]
})
export class UsuarioModule { }
