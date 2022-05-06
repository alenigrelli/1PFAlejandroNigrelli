import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class toolbarComponent implements OnInit {

  constructor(
    private servicioUsuario: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  esAdmin(){
    return this.servicioUsuario.esAdmin();
  }

}
