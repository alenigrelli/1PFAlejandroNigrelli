import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosCursoService {
  cursoObservable!: Observable<any>;
  cursoSubscripcion!: Subscription;
  cursoSubject!: Subject<any>;
  cursos!: any[] ;
  constructor(private http: HttpClient) {
    
  }

  obtenerCurso(): Observable<any> {
    this.cursoObservable = this.http.get('https://625608b68646add390e01368.mockapi.io/alumnos/v1/cursos');
    this.cursoSubscripcion = this.cursoObservable.subscribe(cursos => {
      this.cursos = cursos;
    });

    return this.cursoObservable;
  }

  obtenerCursoMod(): Observable<any>{
    return of(this.cursos)
  }
  guardarCurso(value: any){
    //this.cursos = this.cursos.filter( curso => curso.id !== value.id);
    this.cursos.push(value);
  }
}
