import { createReducer, on } from "@ngrx/store";
import { crearSesion } from "../actions/login.actions";


export const authFeatureKey = 'auth';

export interface AuthState {
    usaurioActivo: any
}

  
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
        return { ...estado, sesionActiva: true, usuario }
    }

    )
)