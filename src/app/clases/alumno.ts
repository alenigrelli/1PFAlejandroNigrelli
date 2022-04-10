export class Alumno {
    constructor(
    public id?: number,
    public nombre?: string,
    public apellido?: string,
    public fechaIngreso?: Date,
    public edad?: number,
    public fechaNacimiento?: Date,
    public cantMatInscr?: number,
    ){
        id = Math.random();
        nombre = '';
        apellido = '';
        fechaIngreso = new Date(2017,0,12);
        edad = 0;
        fechaNacimiento = new Date(2017,0,12);
        cantMatInscr = 0;
    }
}
