
  
import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectorSesion = (state: AppState) => state.sesion;

export const selectorSesionActiva = createSelector(
    selectorSesion,
    (state: any) => state
);