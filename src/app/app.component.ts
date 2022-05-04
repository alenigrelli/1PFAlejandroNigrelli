import { AfterViewInit, Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './core/servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = '1PFAlejandroNigrelli';
  estaLogueado!: boolean;
  nombreUsuario!: any;

  constructor(
    public servicioLogin: LoginService,
    public router: Router
  ){

  }

  ngOnInit(){
    this.servicioLogin.usuarioLogueado().subscribe(logueado =>{
      this.estaLogueado = logueado;
      let usuarioLogueado = localStorage.getItem('usuarioLogueado') || '';
      if(usuarioLogueado){
        this.nombreUsuario = JSON.parse(usuarioLogueado).nombre;
      }
      this.router.navigate(['/alumnos/listaAlumnos'])
    });
  }

  ngAfterViewInit(): void {
    this.estaLogueado = this.servicioLogin.Logueado();
    let usuarioLogueado = localStorage.getItem('usuarioLogueado') || '';
    if(usuarioLogueado){
      this.nombreUsuario = JSON.parse(usuarioLogueado).nombre;
    }
  }

  cerrarSesion(){
    this.servicioLogin.logOut();
    this.estaLogueado = this.servicioLogin.Logueado();
  }

}
