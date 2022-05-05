
  
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { CoreModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login.component';


describe('UsuariosComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule, RouterTestingModule, SharedModule, CoreModule, BrowserAnimationsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });
  it(
    'La informacion se muestra en pantalla',
    () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const vista = fixture.nativeElement as HTMLElement;
      const queryVista = vista.querySelector('#formLogin');
      const inputElements = queryVista?.querySelectorAll('input');

      expect(inputElements?.length || 0).toEqual(2);

    }
  )
  it(
      'Formulario valido',
      () => {
        const fixture = TestBed.createComponent(LoginComponent);
        const vista = fixture.nativeElement as HTMLElement;
        const queryVista = vista.querySelector('#formLogin');
        const inputElements : any = queryVista?.querySelectorAll('input');
        const loginInputUser : HTMLInputElement = inputElements[0];
        const loginInputPassword : HTMLInputElement = inputElements[1];
        loginInputUser.value = 'alejandro.nigrelli@gmail.com';
        loginInputPassword.value = '123';
        const isLoginFormValid = fixture.componentInstance.formLogin.valid;
        fixture.whenStable().then(() =>{
            expect(isLoginFormValid).toEqual(false);
        })
      }
  )
  it(
    'Validacion de formularios invalidos',
    () => {
      const fixture = TestBed.createComponent(LoginComponent);
      const vista = fixture.nativeElement as HTMLElement;
      const queryVista = vista.querySelector('#formLogin');
      const inputElements : any = queryVista?.querySelectorAll('input');
      const loginInputUser : HTMLInputElement = inputElements[0];
      const loginInputPassword : HTMLInputElement = inputElements[1];
      loginInputUser.value = 'alejandro.nigrelli@gmail.com';
      loginInputUser.dispatchEvent(new Event('input'));
      const isLoginFormValid = fixture.componentInstance.formLogin.valid;
      fixture.whenStable().then(() =>{
          expect(isLoginFormValid).toEqual(false);
      })
    }
)

});