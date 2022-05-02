import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class toolbarComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  esAdmin(){
    //llamo al servicio de usuario para ver sus permisos y retorno
    return false;
  }

}
