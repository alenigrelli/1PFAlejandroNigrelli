import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  esAdmin(){
    let usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado') || '');
    if(usuarioLogueado && usuarioLogueado.permisos.includes('admin')){
      return true;
    }else{
      return false;
    }
    
  }

  esAlumno(){
    return true;
  }
}
