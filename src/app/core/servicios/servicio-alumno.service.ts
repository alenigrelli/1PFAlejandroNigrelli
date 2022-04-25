import { Injectable, OnDestroy } from '@angular/core';
import { map,  Observable, of, Subject, Subscription } from 'rxjs';
import { Alumno } from '../../clases/alumno';
import { HttpClient } from '@angular/common/http';

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
    this.alumnos = this.alumnos.filter( alumno => alumno.id != value.id) || [];
    if(value.id)
      return this.http.put('https://625608b68646add390e01368.mockapi.io/alumnos/v1/alumnos/'+value.id,value);
    return this.http.post('https://625608b68646add390e01368.mockapi.io/alumnos/v1/alumnos/',value);

  }

  actualizaSubject(alumno?: any){
    if(alumno) 
      this.alumnos.push(alumno);
    this.alumnoSubject.next(this.alumnos);
  }

  eliminarAlumno(id: number){
    this.alumnos = this.alumnos.filter( alumno => alumno.id !== id);
    return this.http.delete('https://625608b68646add390e01368.mockapi.io/alumnos/v1/alumnos/'+ id);
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
    let alumnoNuevo;
    this.alumnos.filter((alumno: any) => alumno.id == alumnoId).forEach(alumno =>{
      const cursos = alumno.cursos?.filter((id: any) => id != cursosId);
      alumno.cursos = cursos;
      alumnoNuevo = alumno;
    });
    return this.http.put('https://625608b68646add390e01368.mockapi.io/alumnos/v1/alumnos/'+alumnoId + '/',alumnoNuevo);
  }

  agregarCurso(cursoId: any, alumnoIn: any){
    alumnoIn.cursos.push(cursoId)
    this.alumnos.filter(alumno => alumno.id == alumnoIn.id).forEach(alumno =>{
      alumno.cursos?.push(cursoId);
    })
    console.log(JSON.stringify(alumnoIn));
    return this.http.put('https://625608b68646add390e01368.mockapi.io/alumnos/v1/alumnos/'+alumnoIn.id + '/',alumnoIn);
  }

  ngOnDestroy(): void {
    this.alumnoSubscripcion.unsubscribe();
  }

}
