import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosCursoService {

  constructor(private http: HttpClient) {
    
  }

  obtenerCurso(): Observable<any> {
    return this.http.get("https://625608b68646add390e01368.mockapi.io/alumnos/v1/cursos");
  }
}
