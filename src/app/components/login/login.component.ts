import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Observable, Subject, take, takeUntil } from 'rxjs';
import { LoginService } from 'src/app/core/servicios/login.service';
import { crearSesion } from 'src/app/state/actions/login.actions';
import { selectorUsuarioActivo } from '../../state/selectors/login.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  sesion$!: Observable<any>;
  public loginValid = true;

  constructor(
    public servicioLogin: LoginService,
    private store: Store<any>,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.sesion$ = this.store.select(selectorUsuarioActivo);
  }

  public ngOnDestroy(): void {
  }

  public onSubmit(): void {
    this.servicioLogin.loguearse(this.formLogin.value.username, this.formLogin.value.password)
    .subscribe(usuario =>{
      if(usuario){
        this.store.dispatch(crearSesion({usuario: usuario}));
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
        this.servicioLogin.usuarioLogueado();
      };
    });
  }
}