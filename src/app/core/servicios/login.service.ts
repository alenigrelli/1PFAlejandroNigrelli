import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { ServicioAlumnoService } from './servicio-alumno.service';
import { UsuarioService } from './usuario.service';
import { Store } from '@ngrx/store';
import { selectorUsuarioActivo } from 'src/app/state/selectors/login.selectors';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  subjectUsuario: Subject<any> = new Subject();
  subjectUsuarioLogueado: Subject<any> = new Subject();
  logueado: boolean = false;
  usuarioActivo: boolean = false;
  constructor(private router: Router,
    private servicioAlumnos: ServicioAlumnoService,
    private servicioUsuarios: UsuarioService,
    private store: Store
    ) { }

  usuarioLogueado(){
    let logueado = false;
    let usuarioPersistente = localStorage.getItem('usuarioLogueado') || '';
    if(!usuarioPersistente){
      this.store.select(selectorUsuarioActivo).subscribe((usuario) => {
        this.usuarioActivo = usuario.sesionActiva;
        logueado = usuario.sesionActiva;
      });
    }else{
      this.usuarioActivo = true;
      logueado = true;
    }
    this.subjectUsuarioLogueado.next(logueado);
    return this.subjectUsuarioLogueado;
  }

  Logueado(){
    let usuarioLogueado;
    let usuarioPersistente = localStorage.getItem('usuarioLogueado') || '';
    if(!usuarioPersistente){
      this.store.select(selectorUsuarioActivo).subscribe((usuario) => {
        usuarioLogueado = usuario.sesionActiva;
      });
    }else{
      usuarioLogueado = true;
    }
    if(usuarioLogueado){
      return true;
    }
    return false;
  }

  loguearse(email: string, contraseña: any){
    this.servicioUsuarios.loginUsuario(email, contraseña)
    .subscribe((usuario: any) =>{
      if(usuario){
        this.subjectUsuario.next(usuario[0]);
      }
    });
    return this.subjectUsuario;
  }

  logOut(){
    localStorage.setItem('usuarioLogueado','');
    this.router.navigate(['/login'])
    this.subjectUsuario.next('')
  }


}
