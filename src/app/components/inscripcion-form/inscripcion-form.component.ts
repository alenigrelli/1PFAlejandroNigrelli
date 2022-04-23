import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicioAlumnoService } from 'src/app/servicios/servicio-alumno.service';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html',
  styleUrls: ['./inscripcion-form.component.css']
})
export class InscripcionFormComponent implements OnInit {
  displayedColumns: string[] = ['nombre','dni', 'edad', 'nacimiento'];
  dataSource: any;
  alumnos!: any[];
  alumnosSelect!: any[];
  alumnoSeleccionado!: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public curso: any,
    public servicioAlumno: ServicioAlumnoService
  ) { }

  ngOnInit(): void {
    this.servicioAlumno.obtenerAlumnos().subscribe(alumnos =>{
      this.alumnosSelect = alumnos;
    });
    this.servicioAlumno.obtenerAlumnosCurso(Number(this.curso.id)).subscribe(alumnos =>{
      this.alumnos = alumnos;
    });
  }

  guardar(){
    
  }

  agregar(){
    console.log(this.alumnoSeleccionado);
  }
}
