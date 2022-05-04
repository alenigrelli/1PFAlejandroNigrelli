import { Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    cantMatInscr: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required)
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
      this.formAlumno.setValue({
        id: this.data.idAlumno || '',
        dni: this.data.dni,
        nombre: this.data.nombre,
        edad: this.data.edad,
        apellido: this.data.apellido,
        fechaNacimiento: this.data.fechaNacimiento,
        fechaIngreso: this.data.fechaIngreso,
        cantMatInscr: this.data.cantMatInscr
      });
    }
  }

  guardar(){
    if(this.formAlumno.status === 'VALID'){

      this.formAlumno.value.id = this.data?.idAlumno || '';
      this.usuarioId = this.data?.usuario?.idAlumno || '';
      this.servicioAlumnos.guardarUsuario(this.formAlumno.value, this.data).subscribe(usuario =>{
        this.servicioAlumnos.guardarAlumno(this.formAlumno.value, this.data, usuario).subscribe(
          alumno =>{
            this.dialogRef.close();
            this.servicioAlumnos.actualizaSubject(alumno);
          }
        )
      })
    }
  }



}
