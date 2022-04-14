import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, of, from, Subscription } from 'rxjs';
import { Alumno } from 'src/app/clases/alumno';
import { ServicioAlumnoService } from 'src/app/servicios/servicio-alumno.service';

@Component({
  selector: 'app-consulta-alumnos',
  templateUrl: './consulta-alumnos.component.html',
  styleUrls: ['./consulta-alumnos.component.css']
})
export class ConsultaAlumnosComponent implements OnInit, OnDestroy {
  

  constructor(private servicioAlumnos: ServicioAlumnoService) { }
  alumnos!: Alumno[];
  dialogoEditar: boolean = false;
  displayedColumns: string[] = ['nombre','dni', 'edad', 'nacimiento', 'ingreso', 'matinscr'];
  dataSource: any;
  alumnosSubscripcion!: Subscription;

  ngOnInit(): void {
    this.alumnosSubscripcion = this.servicioAlumnos.obtenerAlumnos().subscribe( alumnos =>{
      this.alumnos = alumnos;
    })
  }

  alumnosDesaprobados(){
    this.servicioAlumnos.ObtenerAlumnosDesaprobados().then(alumnos =>{
      this.alumnos = alumnos;
    }).catch(error => {
      console.error(error);
    })
  }

  todosAlumnos(){
    this.alumnosSubscripcion = this.servicioAlumnos.obtenerAlumnos().subscribe(alumnos =>{
      this.alumnos = alumnos;
    });
  }
  
  alumnosAprobados(){
    this.alumnosSubscripcion = this.servicioAlumnos.obtenerAlumnos()
    .pipe(map(alumnos => alumnos.filter((alumno: Alumno) => alumno.promedio > 30)))
    .subscribe( alumnos =>{
      this.alumnos = alumnos;
    })
  }

  ngOnDestroy(){
    this.alumnosSubscripcion.unsubscribe();
  }



}
