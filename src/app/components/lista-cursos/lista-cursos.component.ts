import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiciosCursoService } from 'src/app/servicios/servicios-curso.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {
  cursos$!: Observable<any>;
  displayedColumns: string[] = ['nombre', 'inicio', 'fin'];
  constructor(
    private cursosServicio: ServiciosCursoService
  ) { }
  
  ngOnInit(): void {
    this.cursos$ = this.cursosServicio.obtenerCurso();
  }

}
