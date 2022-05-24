import { createReducer, on } from "@ngrx/store";
import { crearSesion } from "../actions/login.actions";

export const estadoInicial: any = {
    sesionActiva: false,
    usuario: {
        id: "",
        nombre: "",
        apellido: "",
        correo: "",
        contrasena: "",
        rol: ""
    }
}

export const loginReducer = createReducer(
    estadoInicial, 
    on(crearSesion, (estado, {usuario}) => {
      console.log(usuario);
        return { ...estado, sesionActiva: true, usuario }
    }

    )
)