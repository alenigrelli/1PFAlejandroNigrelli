import { inject, TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Usuario } from 'src/app/clases/usuario';
import { LoginService } from './login.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ObserversModule } from '@angular/cdk/observers';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientModule, RouterTestingModule, ObserversModule]
  });
    service = TestBed.inject(UsuarioService);
  });
  it(
    'El login funciona correctamente',
    inject([ UsuarioService, LoginService], 
    ( usuarioService: UsuarioService, LoginService: LoginService) => {
      const mockUsuario: any[] = [{
        nombre: 'Alejandro',
        apellido: 'Nigrelli',
        email: 'alejandro.nigrelli@gmail.com',
        contrasena: '123',
        id: 2
      }];
      LoginService.loguearse(mockUsuario[0].email, mockUsuario[0].contrasena).subscribe(usuario =>{
        expect(usuario.id).toEqual("2");
      });
    }
    )
  )
});
