import { Persona } from "./persona";

export class Alumno extends Persona {
    constructor(
    public promedio: number,
    public cantMatInscr: number,
    public id: number,
    public nombre?: string,
    public apellido?: string,
    public fechaIngreso?: Date,
    public edad?: number,
    public fechaNacimiento?: Date,
    ){
        super();
        this.promedio = 0;
    }
}
