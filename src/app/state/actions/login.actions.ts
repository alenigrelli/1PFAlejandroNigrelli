import { createAction, props } from "@ngrx/store";

export const crearSesion = createAction(
    '[Auth Login] Sesion creada',
    props<{ usuario: any }>()
);