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

  loginUsuario(email: any, contrasena: any){
    return  this.obtenerUsuarios()
    .pipe(map((usuarios : any) => usuarios.filter((usuario: Usuario) => usuario.email === email && usuario.contrasena === contrasena)));
  }

  esAlumno(){
    return true;
  }
}
