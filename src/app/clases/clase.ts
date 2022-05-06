import { Time } from "@angular/common";
import { Profesor } from "./profesor";

export class Clase {
    constructor(
        public id: number,
        public titulo: string,
        public horario: Time,
        public profesores?: Profesor[],
        public descripcion?: string
    ){

    }
}
