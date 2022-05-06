import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Alumno } from '../../clases/alumno';

@Pipe({
  name: 'NombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(alumno: Usuario): unknown {
    let nombreCompleto = alumno.nombre + '-' + alumno.apellido;
    return nombreCompleto;
  }

}
