import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['nombre','dni', 'edad', 'nacimiento', 'ingreso', 'verMas'];
  usuarios!: any[];
  constructor() { }

  ngOnInit(): void {
    if(this.esAdmin()){
      this.displayedColumns.push('editar');
      this.displayedColumns.push('eliminar');
    }
  }

  eliminarUsuario(usuarioId: any){

  }

  agregarUsuario(){

  }

  verMas(usuario: any){

  }

  editarUsuario(usuario: any){

  }

  esAdmin(){
    return true;
  }
  
}
