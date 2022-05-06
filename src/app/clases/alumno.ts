import { Usuario } from "./usuario";

export class Alumno  {
    public promedio: number;
    public cantMatInscr!: number;
    public id!: number;
    public usuario!: Usuario;
    public fechaIngreso?: Date;
    public cursos?: number[];
    constructor(){
        this.promedio = 0;
    }
    public obtenerNombre(){
        return this.usuario.nombre;
    }

    public obtenerApellido(){
        return this.usuario.apellido;
    }
}
