import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiciosCursoService } from 'src/app/servicios/servicios-curso.service';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.css']
})
export class AbmCursosComponent implements OnInit {
  formCurso: FormGroup = new FormGroup({
    id: new FormControl(''),
    dni: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    fechaIngreso: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    fechaNacimiento: new FormControl('', Validators.required),
    cantMatInscr: new FormControl('', Validators.required)
  });
  data: boolean = false;
  constructor(public servicioCursos: ServiciosCursoService) { }

  ngOnInit(): void {

  }

  guardar(){
    this.servicioCursos.guardarCurso(this.formCurso.value);
  }
}
