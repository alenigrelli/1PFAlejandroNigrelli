import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from 'src/app/clases/alumno';
import {MatDialog} from '@angular/material/dialog';
import { ABMalumnosComponent } from '../abmalumnos/abmalumnos.component';
import { ServicioAlumnoService } from 'src/app/servicios/servicio-alumno.service';
import { elementAt, Subscription } from 'rxjs';
import { DetalleAlumnoComponent } from '../detalle-alumno/detalle-alumno.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {
  alumnos!: Alumno[];
  dialogoEditar: boolean = false;
  displayedColumns: string[] = ['nombre','dni', 'edad', 'nacimiento', 'ingreso', 'verMas', 'editar', 'eliminar'];
  dataSource: any;
  subscripcion!: Subscription;
  constructor(public dialog: MatDialog, private servicioAlumnos: ServicioAlumnoService) {
  }

  ngOnInit(): void {
    this.subscripcion = this.servicioAlumnos.obtenerAlumnos().subscribe( alumnos =>{
      this.alumnos = alumnos;
    })
  }


  eliminarAlumno(id: number){
    this.servicioAlumnos.eliminarAlumno(id).subscribe(element =>{
      this.servicioAlumnos.actualizaSubject();
    });
  }

  editarAlumno(value: any){
    this.dialog.open(ABMalumnosComponent,{
      data: value
    });

  }

  agregarAlumno(){
    this.dialog.open(ABMalumnosComponent);
  }

  verMas(alumno: any){
    this.dialog.open(DetalleAlumnoComponent,{
      data: alumno
    })
  }

  ngOnDestroy(): void {
      this.subscripcion.unsubscribe();
  }
}
