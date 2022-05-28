import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { forkJoin, Observable } from 'rxjs';
import { ServicioAlumnoService } from 'src/app/core/servicios/servicio-alumno.service';
import { ServiciosCursoService } from 'src/app/core/servicios/servicios-curso.service';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {
  alumnos!: any[];
  displayedColumns: string[] = ['nombre','dni', 'edad', 'nacimiento'];
  alumnosEliminados: any[] = [];
  esAdmin: boolean = false;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public curso: any,
    public servicioAlumnos: ServicioAlumnoService,
    public servicioCurso: ServiciosCursoService,
    public dialogRef: MatDialogRef<DetalleCursoComponent>,
    private servicioUsuario: UsuarioService,
    public iziToast: Ng2IzitoastService
  ) { }

  ngOnInit(): void {
    this.servicioAlumnos.obtenerAlumnosCurso(this.curso.id).subscribe(alumnos =>{
      this.alumnos = alumnos;
      this.table.renderRows();
    });
    if(this.servicioUsuario.esAdmin()){
      this.esAdmin = true;
      this.displayedColumns.push('eliminar')
    }
  }

  eliminarAlumnoCurso(alumnoIn:any){
    this.alumnos = this.alumnos.filter(alumno => alumno.id != alumnoIn.id);
    this.alumnosEliminados.push(alumnoIn);
    this.table.renderRows();
  }

  guardar(){
    const observables: Observable<any>[] = [];
    observables.push(this.servicioCurso.guardarAlumnos(this.curso.id, this.alumnos));
    this.alumnosEliminados.forEach(alumno =>{
      observables.push(this.servicioAlumnos.eliminarCurso(alumno.id, this.curso.id));
    })
    forkJoin(observables).subscribe(element =>{
      this.dialogRef.close()
      this.MostrarToast('Alumno/s desinscripto/s');
    });
  }

  MostrarToast(itMsg: string) {
    this.iziToast.show({
      title: itMsg,
      timeout: 1000,
      color: 'green',
      position: 'topCenter',
    });
  }
}
