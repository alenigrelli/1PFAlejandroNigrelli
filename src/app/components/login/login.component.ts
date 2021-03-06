import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, Subject, take, takeUntil } from 'rxjs';
import { LoginService } from 'src/app/core/servicios/login.service';

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

  public loginValid = true;

  constructor(
    public servicioLogin: LoginService,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public onSubmit(): void {
    this.servicioLogin.loguearse(this.formLogin.value.username, this.formLogin.value.password)
    .subscribe(usuario =>{
      if(usuario){
        this.servicioLogin.usuarioLogueado();
      };
    });
  }
}