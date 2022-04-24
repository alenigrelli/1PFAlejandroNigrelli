import { Injectable, OnDestroy } from '@angular/core';
import { filter, map,  Observable, of, Subject, Subscription } from 'rxjs';
import { Alumno } from '../clases/alumno';
import { HttpClient } from '@angular/common/http';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';

@Injectable({
  providedIn: 'root'
})
export class ServicioAlumnoService implements OnDestroy {
  alumnos: Alumno[] = [];
  alumnoSubject: Subject<any> = new Subject();
  alumnoObservable!: Observable<any>;
  alumnoSubscripcion !: Subscription;

  constructor(
    private http: HttpClient
  ){}

  guardarAlumno(value: any){
    this.alumnos = this.alumnos.filter( alumno => alumno.id !== value.id);
    this.alumnos.push(value);
    this.alumnoSubject.next(this.alumnos);
  }

  eliminarAlumno(id: number){
    this.alumnos = this.alumnos.filter( alumno => alumno.id !== id);
    this.alumnoSubject.next(this.alumnos)
  }

  obtenerAlumnos(){
    this.alumnoObservable = this.http.get('https://625608b68646add390e01368.mockapi.io/alumnos/v1/alumnos');
    this.alumnoSubscripcion = this.alumnoObservable.subscribe(alumnos => {
      this.alumnos = alumnos;
      this.alumnoSubject.next(this.alumnos);
    });

    return this.alumnoSubject;
  }

  ObtenerAlumnosDesaprobados(): Promise<any>{
    let alumnosDesPromise = new Promise(
      (resolve, reject) =>{
        const error = false;
        if(!error){
          let alumnosDesaprobados = this.alumnos.filter(alumno => alumno.cantMatInscr > 0 && alumno.promedio < 6)
          resolve(alumnosDesaprobados);
        }else{
          reject('Hubo un error al solicitar los alumnos desaprobados');
        }
      }
    );
    return alumnosDesPromise;
  }

  obtenerAlumnosCurso(idCurso: number){
    return this.obtenerAlumnos()
    .pipe(map(alumnos => alumnos.filter((alumno: Alumno) => alumno.cursos?.includes(idCurso))));
  }

  eliminarCurso(alumnoId: any, cursosId: any){
    /* Pegarle al endpoint actualizando los cursos del alumno */
    this.alumnos.filter((alumno: any) => alumno.id == alumnoId).forEach(alumno =>{
      const cursos = alumno.cursos?.filter((curso: any) => curso.id != cursosId);
      alumno.cursos = cursos;
    });
  }

  agregarCurso(cursoId: any, alumnoIn: any){
    this.alumnos.filter(alumno => alumno.id == alumnoIn.id).forEach(alumno =>{
      alumno.cursos?.push(cursoId);
      
    })
  }

  ngOnDestroy(): void {
    this.alumnoSubscripcion.unsubscribe();
  }

}
