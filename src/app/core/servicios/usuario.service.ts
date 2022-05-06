import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, Subscription } from 'rxjs';
import { Usuario } from 'src/app/clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioObservable!: Observable<any>;
  usuarios!: any[];
  subjectUsuarios: Subject<any> = new Subject();
  usuarioSubscripcion!: Subscription;
  subjectUsuarioLogueado: Subject<any> = new Subject();
  constructor(
    private http: HttpClient
  ) { }

  esAdmin(){
    let usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado') || '');
    if(usuarioLogueado && usuarioLogueado.permisos.includes('admin')){
      return true;
    }else{
      return false;
    }
    
  }

  obtenerUsuarios(){
    this.usuarioObservable = this.http.get('https://62726699c455a64564c084c3.mockapi.io/usuarios');
    this.usuarioSubscripcion = this.usuarioObservable.subscribe(usuarios => {
      this.usuarios = usuarios;
      this.subjectUsuarios.next(this.usuarios);
    });
    

    return this.subjectUsuarios;
  }
  obtenerUsuarioLogueado(email: any, contrasena: any){
    this.usuarioObservable = this.http.get('https://62726699c455a64564c084c3.mockapi.io/usuarios');

    this.usuarioSubscripcion = this.usuarioObservable.pipe(map((usuarios : any) => usuarios.filter((usuario: Usuario) => usuario.email === email && usuario.contrasena === contrasena)))
    .subscribe((usuarios: any) => {
      this.usuarios = usuarios;
      this.subjectUsuarioLogueado.next(this.usuarios);
    });
    

    return this.subjectUsuarioLogueado;
  }

  loginUsuario(email: any, contrasena: any){
    return  this.obtenerUsuarioLogueado(email, contrasena);
  }

  esAlumno(){
    return true;
  }
}
