import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../clases/alumno';

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(alumno: Alumno): unknown {
    console.log(alumno.apellido);
    let nombreCompleto = alumno.nombre + '-' + alumno.apellido;
    console.log(nombreCompleto);
    return nombreCompleto;
  }

}
