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
    this.cursoObservable = this.http.get('https://62726699c455a64564c084c3.mockapi.io/cursos');
    this.cursoSubscripcion = this.cursoObservable.subscribe(cursos => {
      this.cursos = cursos;
    });

    return this.cursoObservable;
  }

  obtenerCursoMod(): Observable<any>{
    return of(this.cursos)
  }

  guardarCurso(value: any){
    this.cursos = this.cursos?.filter( curso => curso.id !== value.id) || [];
    this.cursos.push(value);
    if(value.id)
      return this.http.put('https://62726699c455a64564c084c3.mockapi.io/cursos/'+value.id,value);

    return this.http.post('https://62726699c455a64564c084c3.mockapi.io/cursos',value);
  }


  guardarAlumnos(idCurso: any, alumnos: any[]){
    let cursonuevo;
    this.cursos.filter(curso => curso.id == idCurso).forEach(curso =>{
      curso.alumnos = alumnos.map( alumno => alumno.id);
      cursonuevo = curso;
    });
    return this.http.put('https://62726699c455a64564c084c3.mockapi.io/cursos/'+ idCurso + '/',cursonuevo);
  }

  eliminarCurso(id: number){
    this.cursos = this.cursos.filter( curso => curso.id !== id);
    this.http.delete('https://62726699c455a64564c084c3.mockapi.io/cursos/'+ id).subscribe(element =>{
      console.log('eliminado')
    });
    return of(this.cursos);
  }
}
