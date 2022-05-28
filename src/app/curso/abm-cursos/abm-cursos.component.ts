import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { ServiciosCursoService } from 'src/app/core/servicios/servicios-curso.service';

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
    public iziToast: Ng2IzitoastService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit(): void {
    if(this.data){
      //this.data.fechaInicio = new Date(this.data.fechaInicio)
      console.log(this.data)
      this.data.fechaInicio = this.data.fechaFin;
      console.log(this.data)
      console.log(this.formCurso)
      this.formCurso.setValue(this.data);
    }
  }

  guardar(){
    if(this.formCurso.status === 'VALID'){
      this.formCurso.value.id = this.data?.id || '';
      this.servicioCursos.guardarCurso(this.formCurso.value).subscribe(element =>{
        this.dialogRef.close();
        this.MostrarToast('Curso creado/editado exitosamente.')
      });
    }
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
