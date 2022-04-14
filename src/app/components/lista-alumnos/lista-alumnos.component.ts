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
  alumnos!: Alumno[];
  dialogoEditar: boolean = false;
  displayedColumns: string[] = ['nombre','dni', 'edad', 'nacimiento', 'ingreso', 'matinscr', 'editar', 'eliminar'];
  dataSource: any;
  constructor(public dialog: MatDialog, private servicioAlumnos: ServicioAlumnoService) {
  }

  ngOnInit(): void {
    this.servicioAlumnos.obtenerAlumnos().subscribe( alumnos =>{
      this.alumnos = alumnos;
    })
  }


  eliminarAlumno(id: number){
    this.servicioAlumnos.eliminarAlumno(id);
  }

  editarAlumno(value: any){
    this.dialog.open(ABMalumnosComponent,{
      data: value
    });

  }

  agregarAlumno(){
    this.dialog.open(ABMalumnosComponent);
  }
}
