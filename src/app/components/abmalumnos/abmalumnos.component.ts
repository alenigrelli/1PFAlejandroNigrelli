import { Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServicioAlumnoService } from 'src/app/servicios/servicio-alumno.service';
@Component({
  selector: 'app-abmalumnos',
  templateUrl: './abmalumnos.component.html',
  styleUrls: ['./abmalumnos.component.css']
})
export class ABMalumnosComponent implements OnInit {
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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private servicioAlumnos: ServicioAlumnoService,
    public dialogRef: MatDialogRef<ABMalumnosComponent>,
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
      this.formAlumno.value.id = this.data.id || '';
      this.servicioAlumnos.guardarAlumno(this.formAlumno.value).subscribe(element =>{
        this.dialogRef.close();
        this.servicioAlumnos.actualizaSubject(element);
      });
    }
  }



}
