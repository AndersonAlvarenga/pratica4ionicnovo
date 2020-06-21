import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private fireBase: AngularFireAuth,
    private route: Router
  ) { }

  async logar(email: string, senha: string) {
    let retorno;
    let resp = await this.fireBase.signInWithEmailAndPassword(email, senha)
      .then((resp) => {
        retorno = true
        this.route.navigate(['sintomas-saude'])
      }
      )
      .catch((error) => {
        retorno = error
      })
    return retorno
  }
  async cadastrar(email: string, senha: string) {
    let resp = await this.fireBase.createUserWithEmailAndPassword(email, senha)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error))
  }
}
