import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from 'src/app/clases/alumno';
import {MatDialog} from '@angular/material/dialog';
import { abmalumnosComponent } from '../abmalumnos/abmalumnos.component';
import { elementAt, Subscription } from 'rxjs';
import { DetalleAlumnoComponent } from '../detalle-alumno/detalle-alumno.component';
import { ServicioAlumnoService } from 'src/app/core/servicios/servicio-alumno.service';

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
    this.dialog.open(abmalumnosComponent,{
      data: value
    });

  }

  agregarAlumno(){
    this.dialog.open(abmalumnosComponent);
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
