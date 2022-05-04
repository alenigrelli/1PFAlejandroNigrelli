import { Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { ServicioAlumnoService } from 'src/app/core/servicios/servicio-alumno.service';
@Component({
  selector: 'abmalumnos',
  templateUrl: './abmalumnos.component.html',
  styleUrls: ['./abmalumnos.component.css']
})
export class abmalumnosComponent implements OnInit {
  formAlumno: FormGroup = new FormGroup({
    id: new FormControl(''),
    dni: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    fechaIngreso: new FormControl('', Validators.required),
    edad: new FormControl('', Validators.required),
    fechaNacimiento: new FormControl('', Validators.required),
    cantMatInscr: new FormControl('', Validators.required)
  });
  usuarioId: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioAlumnos: ServicioAlumnoService,
    public dialogRef: MatDialogRef<abmalumnosComponent>,
  ){
  }

  ngOnInit(): void {
    if(this.data) {
      this.formAlumno.setValue(this.data);
      this.formAlumno.value.id = this.data.id || '';
    }
  }

  guardar(){
    if(this.formAlumno.status === 'VALID'){

      this.formAlumno.value.id = this.data?.id || '';
      this.usuarioId = this.data?.usuario?.id || '';
      forkJoin(this.servicioAlumnos.guardarAlumno(this.formAlumno.value, this.data))
      .subscribe(element =>{
        this.dialogRef.close();
        console.log(element);
        this.servicioAlumnos.actualizaSubject(element[0]);
      });
    }
  }



}
