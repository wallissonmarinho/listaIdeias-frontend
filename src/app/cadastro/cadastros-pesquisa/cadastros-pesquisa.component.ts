import { Component, OnInit } from '@angular/core';

import { AppService } from '../../app.service';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastros-pesquisa',
  templateUrl: './cadastros-pesquisa.component.html',
  styleUrls: ['./cadastros-pesquisa.component.css']
})
export class CadastrosPesquisaComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  cadastros: Array<any>;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.listar()
      .subscribe(resposta => this.cadastros = resposta);
  }
}
