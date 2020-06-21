import { Component, OnInit } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuarioForm: Usuario = {} as Usuario;
  erroLogin: string = "true";
  retorno = {
    a: "string",
    code: "astring",
    message: "string"
  }
  aux: any
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }
  async login() {
    this.aux = await this.loginService.logar(this.usuarioForm.email, this.usuarioForm.senha);
    console.log(this.aux)
    this.retorno = this.aux;
    this.erroLogin = this.retorno.message;
  }
  async cadastrar() {
    await this.loginService.cadastrar(this.usuarioForm.email, this.usuarioForm.senha);

  }

}
