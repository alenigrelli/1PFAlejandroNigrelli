import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  logueado: boolean = false;
  logueadoSubject: Subject<any> = new Subject();
  constructor(private router: Router) { }

  usuarioLogueado(){
    return this.logueado;
  }

  loguearse(){
    this.logueado = true;
    localStorage.setItem("logueado", JSON.stringify(this.logueado));
    this.router.navigate(['listaAlumnos']);
  }

}
