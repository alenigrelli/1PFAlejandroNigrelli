import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/clases/alumno';
import {MatDialog} from '@angular/material/dialog';
import { ABMalumnosComponent } from '../abmalumnos/abmalumnos.component';
import { ServicioAlumnoService } from 'src/app/servicios/servicio-alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos: Alumno[];
  dialogoEditar: boolean = false;
  displayedColumns: string[] = ['nombre','dni', 'edad', 'nacimiento', 'ingreso', 'matinscr', 'editar', 'eliminar'];
  dataSource: any;
  constructor(public dialog: MatDialog, private servicioAlumnos: ServicioAlumnoService) {
    this.alumnos = this.servicioAlumnos.obtenerAlumnos();
  }

  ngOnInit(): void {
  }


  eliminarAlumno(id: number){
    this.alumnos = [...this.servicioAlumnos.eliminarAlumno(id)];
  }

  editarAlumno(value: any){
    const dialogRef = this.dialog.open(ABMalumnosComponent,{
      data: value
    });
    dialogRef.afterClosed().subscribe(dato =>{
      this.alumnos = [...this.servicioAlumnos.obtenerAlumnos()];
    })
  }

  agregarAlumno(){
    const dialogRef = this.dialog.open(ABMalumnosComponent);
    dialogRef.afterClosed().subscribe(dato =>{
      this.alumnos = [...this.servicioAlumnos.obtenerAlumnos()];
    })
  }
}
