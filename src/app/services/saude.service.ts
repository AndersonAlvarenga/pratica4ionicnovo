import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Sintomas } from '../interfaces/sintomas';
import { Storage } from '@ionic/storage'
import { ListaSintomas } from '../interfaces/listaSintomas';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaudeService {
  listaSintoma: ListaSintomas[] = [];
  constructor(
    private storage: Storage,
    private datePipe: DatePipe,
    private route: Router
  ) {

  }

   inserir(sintoma: Sintomas) {
    let key = this.datePipe.transform(sintoma.data, 'ddMMyyyyHHmmss');
    return this.save(key, sintoma)
  }
  save(key: string, sintoma: Sintomas) {
    let resp = this.storage.set(key, sintoma)
    this.route.navigate(['sintomas-saude'])
  }
   deletar(key: string) {
    return this.storage.remove(key);
  }
  atualizar(key: string, sintoma: Sintomas) {
    return this.storage.set(key, sintoma);
  }
get(key) {
    return this.storage.get(key);
  }
  getAll() {
    this.storage.forEach(
      (dado) => {
        this.listaSintoma.push(dado)
      }
    )
    return this.listaSintoma;
  }
}
