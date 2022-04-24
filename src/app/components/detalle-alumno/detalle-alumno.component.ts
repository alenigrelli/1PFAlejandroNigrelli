import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ServicioAlumnoService } from 'src/app/servicios/servicio-alumno.service';
import { ServiciosCursoService } from 'src/app/servicios/servicios-curso.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {
  cursos: any;
  displayedColumns: string[] = ['nombre', 'inicio', 'fin', 'eliminar'];
  cursosEliminados: any = [];
  @ViewChild(MatTable) table!: MatTable<any>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public alumno: any,
    public servicioCursos: ServiciosCursoService,
    public servicioAlumnos: ServicioAlumnoService
  ) {}

  ngOnInit(): void {
    this.servicioCursos.obtenerCurso().subscribe(cursos =>{
      this.cursos =  cursos.filter((curso : any) => {return curso.alumnos?.includes(Number(this.alumno.id))});
    });
  }

  eliminarInscripcion(cursoIn: any){
    this.cursosEliminados.push(cursoIn);
    this.cursos = this.cursos.filter((curso: any) => curso.id != cursoIn.id);
    this.alumno.cursos = this.cursos;
    this.table.renderRows();
  }

  guardar(){
    this.cursosEliminados.forEach((curso: any) =>{
      const alumnos = curso.alumnos.filter((alumno: any) => alumno.id != this.alumno.id);
      this.servicioCursos.guardarAlumnos(curso.id, alumnos);
      this.servicioAlumnos.eliminarCurso(this.alumno.id, curso.id);

    })
  }

}
