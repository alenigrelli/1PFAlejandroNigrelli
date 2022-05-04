import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { ServicioAlumnoService } from './servicio-alumno.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  subjectUsuario: Subject<any> = new Subject();
  subjectUsuarioLogueado: Subject<any> = new Subject();
  logueado: boolean = false;
  constructor(private router: Router,
    private servicioAlumnos: ServicioAlumnoService,
    private servicioUsuarios: UsuarioService

    ) { }

  usuarioLogueado(){
    let logueado = false;
    let usuarioLogueado = localStorage.getItem('usuarioLogueado') || '';
    
    if(usuarioLogueado.length > 0){
      logueado = true;
    }
    this.subjectUsuarioLogueado.next(logueado);
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
    this.servicioUsuarios.loginUsuario(email, contraseña)
    .subscribe((usuario: any) =>{
      if(usuario){
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuario[0]));
        this.subjectUsuario.next(usuario[0]);
      }
    });
    return this.subjectUsuario;
  }

  logOut(){
    localStorage.removeItem('usuarioLogueado');
    this.router.navigate(['/login'])
    this.subjectUsuario.next(0)

  }


}
