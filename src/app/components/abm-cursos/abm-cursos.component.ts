import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ServiciosCursoService } from 'src/app/servicios/servicios-curso.service';

@Component({
  selector: 'app-abm-cursos',
  templateUrl: './abm-cursos.component.html',
  styleUrls: ['./abm-cursos.component.css']
})
export class AbmCursosComponent implements OnInit {
  formCurso: FormGroup = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', Validators.required),
    fechaInicio: new FormControl('', Validators.required),
    fechaFin: new FormControl('', Validators.required)
  });
  data: boolean = false;
  constructor(public servicioCursos: ServiciosCursoService,
    public dialogRef: MatDialogRef<AbmCursosComponent>,
    ) { }

  ngOnInit(): void {

  }

  guardar(){
    if(this.formCurso.status === 'VALID'){
      if(!this.formCurso.value.id)
        this.formCurso.value.id = Math.random();
      this.servicioCursos.guardarCurso(this.formCurso.value);
      this.dialogRef.close();
    }
  }
}
