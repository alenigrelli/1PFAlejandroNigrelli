import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  esAdmin(){
    return false;
  }

  esAlumno(){
    return true;
  }
}
