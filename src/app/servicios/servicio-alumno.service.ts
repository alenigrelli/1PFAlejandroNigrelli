import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alumno } from '../clases/alumno';

@Injectable({
  providedIn: 'root'
})
export class ServicioAlumnoService {
  alumnos: any[] = [];
  alumnosObservable: Observable<Alumno[]>;
  //private alumnoSubject: Subject<any>;
  constructor(){
    this.alumnosObservable = new Observable((suscripcion) =>{
      suscripcion.next(this.alumnos)
    });
  }

  guardarAlumno(value: any){
    this.alumnos = this.alumnos.filter( alumno => alumno.id !== value.id);
    this.alumnos.push(value);
  }

  eliminarAlumno(id: number){
    this.alumnos = this.alumnos.filter( alumno => alumno.id !== id);
  }

  obtenerAlumnos(){
    return this.alumnosObservable;//this.alumnos;
  }

}
