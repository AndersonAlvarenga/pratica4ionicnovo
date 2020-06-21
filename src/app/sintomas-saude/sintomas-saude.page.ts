import { Component, OnInit } from '@angular/core';
import { ListaSintomas } from '../interfaces/listaSintomas';
import { SaudeService } from '../services/saude.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sintomas-saude',
  templateUrl: './sintomas-saude.page.html',
  styleUrls: ['./sintomas-saude.page.scss'],
})
export class SintomasSaudePage implements OnInit {
  listaSintoma: ListaSintomas[];
  aux: any
  constructor(
    private saudeService: SaudeService,
    private route:Router
  ) { }

  async ngOnInit() {
    this.aux = await this.saudeService.getAll();
    this.listaSintoma = this.aux;
  }
  adicionarNovoSintoma(){
    this.route.navigate(['editar-sintomas'])
  }

}
