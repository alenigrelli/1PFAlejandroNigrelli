import { Component, OnDestroy, OnInit } from '@angular/core';
import { Alumno } from 'src/app/clases/alumno';
import {MatDialog} from '@angular/material/dialog';
import { abmalumnosComponent } from '../abmalumnos/abmalumnos.component';
import { elementAt, Subscription } from 'rxjs';
import { DetalleAlumnoComponent } from '../detalle-alumno/detalle-alumno.component';
import { ServicioAlumnoService } from 'src/app/core/servicios/servicio-alumno.service';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit, OnDestroy {
  alumnos!: any[];
  dialogoEditar: boolean = false;
  displayedColumns: string[] = ['nombre','dni', 'edad', 'nacimiento', 'ingreso', 'verMas'];
  dataSource: any;
  subscripcion!: Subscription;
  constructor(public dialog: MatDialog, 
    private servicioAlumnos: ServicioAlumnoService,
    private servicioUsuario: UsuarioService) {
  }

  ngOnInit(): void {
    this.subscripcion = this.servicioAlumnos.obtenerAlumnos().subscribe( alumnos =>{
      this.alumnos = alumnos.filter((alumno: any) => (alumno?.usuario?.nombre?.length || 0) > 0)
      .map( (alumno: Alumno) => {return {...alumno.usuario, fechaIngreso: alumno.fechaIngreso}});
    })
    if(this.esAdmin()){
      this.displayedColumns.push('editar');
      this.displayedColumns.push('eliminar');
    }
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

  esAdmin(){
    return this.servicioUsuario.esAdmin();
  }



  ngOnDestroy(): void {
      this.subscripcion?.unsubscribe();
  }
}
