import { Curso } from "./curso";
import { usuario } from "./usuario";

export class Alumno extends usuario {
    constructor(
    public promedio: number,
    public cantMatInscr: number,
    public id: number,
    public nombre?: string,
    public apellido?: string,
    public fechaIngreso?: Date,
    public edad?: number,
    public fechaNacimiento?: Date,
    public cursos?: number[],

    ){
        super();
        this.promedio = 0;
    }
}
