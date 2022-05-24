import { ActionReducerMap } from "@ngrx/store";
import { loginReducer } from "./reducers/login.reducer";

export interface AppState {
    sesion: any
};

export const ROOT_REDUCERS: ActionReducerMap<any> = {
    sesion: loginReducer
}