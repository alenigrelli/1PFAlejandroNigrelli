import { AfterViewInit, Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { LoginService } from './core/servicios/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '1PFAlejandroNigrelli';
  usuarioLogueado!: boolean;
  constructor(
    public servicioLogin: LoginService
  ){

  }

  ngOnInit(){
    this.usuarioLogueado = localStorage.getItem('logueado') === 'true';
  }

}
