import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  constructor(public servicioCursos: ServiciosCursoService,
    public dialogRef: MatDialogRef<AbmCursosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    if(this.data){
      this.formCurso.setValue(this.data);
    }
  }

  guardar(){
    if(this.formCurso.status === 'VALID'){
      this.formCurso.value.id = this.data?.id || '';
      this.servicioCursos.guardarCurso(this.formCurso.value).subscribe(element =>{
        this.dialogRef.close();
      });
    }
  }
}
