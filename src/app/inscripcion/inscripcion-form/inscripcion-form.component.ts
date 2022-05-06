import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { combineLatest, forkJoin, Observable } from 'rxjs';
import { Alumno } from 'src/app/clases/alumno';
import { ServicioAlumnoService } from 'src/app/core/servicios/servicio-alumno.service';
import { ServiciosCursoService } from 'src/app/core/servicios/servicios-curso.service';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html',
  styleUrls: ['./inscripcion-form.component.css']
})
export class InscripcionFormComponent implements OnInit {
  @ViewChild(MatTable) tabla!: MatTable<any>;
  displayedColumns: string[] = ['nombre','dni', 'edad', 'nacimiento'];
  dataSource: any;
  alumnos!: Alumno[];
  alumnosSelect!: Alumno[];
  alumnoSeleccionado!: any;
  esAdmin: boolean = false;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public curso: any,
    public servicioAlumno: ServicioAlumnoService,
    public servicioCurso: ServiciosCursoService,
    private servicioUsuario: UsuarioService,
    public dialogRef: MatDialogRef<InscripcionFormComponent>,
  ) { }

  ngOnInit(): void {
    this.servicioAlumno.obtenerAlumnos().subscribe(alumnos =>{
      this.alumnos = alumnos.filter((alumno:  Alumno) => alumno.cursos?.includes(this.curso.id));
      this.alumnosSelect = alumnos.filter( (alumno : Alumno) => !alumno.cursos?.includes(this.curso.id));
    });
    if(this.servicioUsuario.esAdmin()){
      this.esAdmin = true;
      this.displayedColumns.push('eliminar');
    }else{
      //filtrar select por el alumno logueado
      this.esAdmin = false;
    }
  }

  guardar(){
    const observables: Observable<any>[] = [];
    observables.push(this.servicioCurso.guardarAlumnos(this.curso.id, this.alumnos));
    this.alumnos.filter(alumno => !alumno.cursos?.includes(this.curso.id)).forEach(alumno =>{
      observables.push(this.servicioAlumno.agregarCurso(this.curso.id, alumno));
    });
      const fork =  forkJoin(observables);
      fork.subscribe( element =>{
        try{
          this.dialogRef.close();
        }catch{
          console.error('errro al guardar los alumnos');
        };
      }
      );
    }

  agregar(){
    const alumno: any = this.alumnosSelect.find(alumno => alumno.id == this.alumnoSeleccionado);
    if(alumno)
      this.alumnos.push(alumno);

    this.alumnosSelect = this.alumnosSelect.filter(alumno => alumno.id !== this.alumnoSeleccionado);
    this.tabla.renderRows();
  }

  eliminarAlumnoCurso(alumnoIn: any){
    this.servicioAlumno.eliminarCurso(alumnoIn.id, this.curso.id).subscribe(element =>{
      this.alumnosSelect.push(alumnoIn);
      this.alumnos = this.alumnos.filter(alumno => alumno.id != alumnoIn.id);
      this.tabla.renderRows();
    })
    
  }
}
