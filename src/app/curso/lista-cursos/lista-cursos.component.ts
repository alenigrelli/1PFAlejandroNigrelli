import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { Observable, Subscription } from 'rxjs';
import { ServiciosCursoService } from 'src/app/core/servicios/servicios-curso.service';
import { UsuarioService } from 'src/app/core/servicios/usuario.service';
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
  esAdmin: boolean = false;
  cursos$!: Observable<any>;
  displayedColumns: string[] = ['nombre', 'inicio', 'fin','verMas'];

  
  constructor(
    public dialog: MatDialog,
    private cursosServicio: ServiciosCursoService,
    private usuarioServicio: UsuarioService,
    public iziToast: Ng2IzitoastService
  ) { }
  
  ngOnInit(): void {
    this.cursos$ = this.cursosServicio.obtenerCurso();
    if(this.usuarioServicio.esAdmin()){
      this.displayedColumns.push('editar');
      this.displayedColumns.push('eliminar');
      this.esAdmin = true;
    }else{
      this.esAdmin = false;
    }
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
    this.cursos$ = this.cursosServicio.eliminarCurso(id)
  }

  verMas(curso: any){
    this.dialog.open(DetalleCursoComponent,{
      data: curso
    })
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
