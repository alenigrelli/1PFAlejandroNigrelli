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
  usuarioLogueado!: boolean;
  constructor(
    public servicioLogin: LoginService,
    public router: Router
  ){

  }

  ngOnInit(){
    this.servicioLogin.usuarioLogueado().subscribe(logueado =>{
      this.usuarioLogueado = logueado;
      this.router.navigate(['/alumnos/listaAlumnos'])
    });
  }

  ngAfterViewInit(): void {
    this.usuarioLogueado = this.servicioLogin.Logueado();
  }

  cerrarSesion(){
    this.servicioLogin.logOut();
    this.usuarioLogueado = this.servicioLogin.Logueado();
  }

}
