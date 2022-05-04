import { Injectable, OnDestroy } from '@angular/core';
import { map,  Observable, of, Subject, Subscription } from 'rxjs';
import { Alumno } from '../../clases/alumno';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/clases/usuario';

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

  guardarAlumno(value: any, data: any, usuario?: any){
    this.alumnos = this.alumnos.filter( alumno => alumno.id != value.id) || [];
    if(value.id){
      const alumnoUpdate = new Alumno();
      alumnoUpdate.cantMatInscr = value.cantMatInscr;
      alumnoUpdate.cursos = value.cursos || [];
      alumnoUpdate.usuario = usuario
      return this.http.put('https://625608b68646add390e01368.mockapi.io/alumnos/v1/alumnos/'+value.id,alumnoUpdate);
    }else{
      const alumnoNuevo = new Alumno();
      alumnoNuevo.cantMatInscr = value.cantMatInscr;
      alumnoNuevo.fechaIngreso = value.fechaIngreso;
      alumnoNuevo.promedio = value.promedio;
      alumnoNuevo.usuario = usuario;
      alumnoNuevo.cursos = [];
      return this.http.post('https://625608b68646add390e01368.mockapi.io/alumnos/v1/alumnos/',alumnoNuevo);
    }

  }

  guardarUsuario(value:any, data:any){
    if(value.id){
      const usuarioUpdate = new Usuario();
      usuarioUpdate.nombre = value.nombre;
      usuarioUpdate.edad = value.edad;
      usuarioUpdate.permisos = [];
      usuarioUpdate.email = value.email;
      usuarioUpdate.id = data.id;
      usuarioUpdate.apellido = value.apellido;
      usuarioUpdate.contrasena = data.contrasena;
      usuarioUpdate.fechaNacimiento = value.fechaNacimiento;
      usuarioUpdate.dni = value.dni;
      return this.http.put('https://625608b68646add390e01368.mockapi.io/alumnos/v1/usuarios/'+data.id, usuarioUpdate)
    }else{
      const usuarioNuevo = new Usuario();
      usuarioNuevo.nombre = value.nombre;
      usuarioNuevo.apellido = value.apellido;
      usuarioNuevo.permisos = [];
      usuarioNuevo.email = value.email;
      usuarioNuevo.edad = value.edad;
      usuarioNuevo.contrasena = '123';
      usuarioNuevo.fechaNacimiento = value.fechaNacimiento;
      usuarioNuevo.dni = value.dni;
      return this.http.post('https://625608b68646add390e01368.mockapi.io/alumnos/v1/usuarios/',usuarioNuevo)
    }

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

  loginUsuario(email: any, contrasena: any){
    return  this.obtenerAlumnos()
    .pipe(map(alumnos => alumnos.filter((alumno: Alumno) => alumno.usuario.email === email && alumno.usuario.contrasena === contrasena)));
  }

  ngOnDestroy(): void {
    this.alumnoSubscripcion.unsubscribe();
  }

}
