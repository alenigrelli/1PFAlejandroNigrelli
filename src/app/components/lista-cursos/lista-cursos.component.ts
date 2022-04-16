import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { ServiciosCursoService } from 'src/app/servicios/servicios-curso.service';
import { AbmCursosComponent } from '../abm-cursos/abm-cursos.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) table!: MatTable<any>;
  subscripcion!: Subscription;
  cursos$!: Observable<any>;
  displayedColumns: string[] = ['nombre', 'inicio', 'fin'];

  
  constructor(
    public dialog: MatDialog,
    private cursosServicio: ServiciosCursoService
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

}
