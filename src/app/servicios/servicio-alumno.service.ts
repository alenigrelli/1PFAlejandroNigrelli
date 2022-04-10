import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alumno } from '../clases/alumno';

@Injectable({
  providedIn: 'root'
})
export class ServicioAlumnoService {
  alumnos: any[] = [];
  //alumnosObservable: Observable<Alumno[]>;
  //private alumnoSubject: Subject<any>;
  constructor(){
    /*this.alumnosObservable = new Observable((suscripcion) =>{
      suscripcion.next(this.alumnos)
    });
    this.alumnoSubject = new Subject();*/
  }

  guardarAlumno(value: any){
    this.alumnos = this.alumnos.filter( alumno => alumno.id !== value.id);
    return this.alumnos.push(value);
  }

  eliminarAlumno(id: number){
    return this.alumnos.filter( alumno => alumno.id !== id);
  }

  obtenerAlumnos(){
    return this.alumnos;
  }

}
