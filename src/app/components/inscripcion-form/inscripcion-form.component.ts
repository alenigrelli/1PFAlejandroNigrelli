import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Alumno } from 'src/app/clases/alumno';
import { ServicioAlumnoService } from 'src/app/servicios/servicio-alumno.service';
import { ServiciosCursoService } from 'src/app/servicios/servicios-curso.service';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html',
  styleUrls: ['./inscripcion-form.component.css']
})
export class InscripcionFormComponent implements OnInit {
  @ViewChild(MatTable) tabla!: MatTable<any>;
  displayedColumns: string[] = ['nombre','dni', 'edad', 'nacimiento', 'eliminar'];
  dataSource: any;
  alumnos!: Alumno[];
  alumnosSelect!: Alumno[];
  alumnoSeleccionado!: any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public curso: any,
    public servicioAlumno: ServicioAlumnoService,
    public servicioCurso: ServiciosCursoService,
    public dialogRef: MatDialogRef<InscripcionFormComponent>,
  ) { }

  ngOnInit(): void {
    this.servicioAlumno.obtenerAlumnos().subscribe(alumnos =>{
      this.alumnos = alumnos.filter((alumno:  Alumno) => alumno.cursos?.includes(Number(this.curso.id)));
      this.alumnosSelect = alumnos.filter( (alumno : Alumno) => !alumno.cursos?.includes(Number(this.curso.id)));
    });
  }

  guardar(){
    this.servicioCurso.guardarAlumnos(this.curso.id, this.alumnos);
    this.alumnos.filter(alumno => !alumno.cursos?.includes(this.curso.id)).forEach(alumno =>{
      this.servicioAlumno.agregarCurso(this.curso.id, alumno);
    })
    this.dialogRef.close();
  }

  agregar(){
    const alumno: any = this.alumnosSelect.find(alumno => alumno.id == this.alumnoSeleccionado);
    if(alumno)
      this.alumnos.push(alumno);

    this.alumnosSelect = this.alumnosSelect.filter(alumno => alumno.id !== this.alumnoSeleccionado);
    this.tabla.renderRows();
  }

  eliminarAlumnoCurso(alumnoIn: any){
    this.alumnosSelect.push(alumnoIn);
    this.alumnos = this.alumnos.filter(alumno => alumno.id != alumnoIn.id);
    this.tabla.renderRows();
  }
}
