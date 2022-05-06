import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { ServiciosCursoService } from 'src/app/core/servicios/servicios-curso.service';
import { InscripcionFormComponent } from '../inscripcion-form/inscripcion-form.component';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  constructor(
    private cursosServicio: ServiciosCursoService,
    public dialog: MatDialog,
  ) { }
  subscripcion!: Subscription;
  cursos$!: Observable<any>;
  displayedColumns: string[] = ['nombre', 'inicio', 'fin','inscribirAlumno'];

  ngOnInit(): void {
    this.cursos$ = this.cursosServicio.obtenerCurso();
  }

  inscribirAlumno(curso: any) {

    const observableCurso = this.dialog.open(InscripcionFormComponent,{
      data: curso
    }).afterClosed();
    this.subscripcion = observableCurso.subscribe(result => {
      this.cursos$ = this.cursosServicio.obtenerCursoMod();
    });
  }

}
