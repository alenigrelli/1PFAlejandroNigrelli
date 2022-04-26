import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { ServiciosCursoService } from 'src/app/core/servicios/servicios-curso.service';
import { AbmCursosComponent } from '../abm-cursos/abm-cursos.component';
import { DetalleCursoComponent } from '../detalle-curso/detalle-curso.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) table!: MatTable<any>;
  subscripcion!: Subscription;
  cursos$!: Observable<any>;
  displayedColumns: string[] = ['nombre', 'inicio', 'fin','verMas', 'editar', 'eliminar'];

  
  constructor(
    public dialog: MatDialog,
    private cursosServicio: ServiciosCursoService,
  ) { }
  
  ngOnInit(): void {
    this.cursos$ = this.cursosServicio.obtenerCurso();
  }
  
  agregarCurso(){
    const ObservableCurso = this.dialog.open(AbmCursosComponent).afterClosed();
    this.subscripcion = ObservableCurso.subscribe(result => {
      this.cursos$ = this.cursosServicio.obtenerCursoMod();
    });
  }

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }

  editarCurso(value: any){
    const observableCurso = this.dialog.open(AbmCursosComponent,{
      data: value
    }).afterClosed();
    this.subscripcion = observableCurso.subscribe(result => {
      this.cursos$ = this.cursosServicio.obtenerCursoMod();
    });

  }

  eliminarCurso(id: number){
    this.cursos$ = this.cursosServicio.eliminarCurso(id);
  }

  verMas(curso: any){
    this.dialog.open(DetalleCursoComponent,{
      data: curso
    })
  }

}
