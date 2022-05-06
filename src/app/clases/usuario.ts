export class Usuario {
    public id!: number;

    public email!: string;
    public contrasena!: string;
    public permisos!: string[];
    public nombre?: string;
    public apellido?: string;
    public edad?: number;
    public fechaNacimiento?: Date;
    public dni?: number;
    constructor(
    ){
    }
}
