import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { ServicioAlumnoService } from './servicio-alumno.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  subjectUsuario: Subject<any> = new Subject();
  subjectUsuarioLogueado: Subject<any> = new Subject();
  logueado: boolean = false;
  constructor(private router: Router,
    private servicioAlumnos: ServicioAlumnoService
    ) { }

  usuarioLogueado(){
    let logueado = false;
    let usuarioLogueado = localStorage.getItem('usuarioLogueado') || '';
    
    if(usuarioLogueado){
      logueado = true;
      this.subjectUsuarioLogueado.next(logueado)
    }
    return this.subjectUsuarioLogueado;
  }

  Logueado(){
    let usuarioLogueado = localStorage.getItem('usuarioLogueado') || '';
    
    if(usuarioLogueado){
      return true;
    }
    return false;
  }

  loguearse(email: string, contraseña: any){
    this.servicioAlumnos.loginUsuario(email, contraseña)
    .subscribe((alumno: any) =>{
      if(alumno.length === 1){
        localStorage.setItem('usuarioLogueado', JSON.stringify(alumno[0]));
        this.subjectUsuario.next(alumno)
      }
    });
    return this.subjectUsuario;
  }


}
