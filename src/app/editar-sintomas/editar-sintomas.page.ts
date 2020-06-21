import { Component, OnInit } from '@angular/core';
import { Sintomas } from '../interfaces/sintomas';
import { SaudeService } from '../services/saude.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-sintomas',
  templateUrl: './editar-sintomas.page.html',
  styleUrls: ['./editar-sintomas.page.scss'],
})
export class EditarSintomasPage implements OnInit {
  sintomaForm: Sintomas = {} as Sintomas;
  sintoma: Sintomas;
  constructor(
    private saudeService: SaudeService
  ) { }

  ngOnInit() {
  }
  async salvar() {
    this.sintomaForm.data = new Date();
    this.sintoma=this.sintomaForm
    console.log(this.sintoma)
    return await this.saudeService.inserir(this.sintomaForm);
  }
}
