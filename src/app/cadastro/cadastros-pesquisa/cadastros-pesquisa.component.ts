import { AppService, CadastroFiltro } from './../../app.service';

import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-cadastros-pesquisa',
  templateUrl: './cadastros-pesquisa.component.html',
  styleUrls: ['./cadastros-pesquisa.component.css']
})
export class CadastrosPesquisaComponent implements OnInit {

  viabilidadeopcao = [
    { label: '5', value: '5' },
    { label: '4', value: '4' },
    { label: '3', value: 'MEDIA' },
    { label: '2', value: '2' },
    { label: '1', value: 'BAIXA' },
    { label: 'Todas', value: '' },
  ];

  situacaoopcao = [
    { label: 'Registrada', value: 'Registrada' },
    { label: 'Em Desenvolvimento', value: 'Em Desenvolvimento' },
    { label: 'Cancelada', value: 'Cancelada' },
    { label: 'Desenvolvida', value: 'desenvolvida' },
    { label: 'Todas', value: '' },
  ];

  faPen = faPen;
  faTrash = faTrash;

  situacao: string;

  viabilidade: string;

  cadastros: Array<any>;

  constructor(private service: AppService, private toasty: ToastyService) { }

  ngOnInit() {
    this.pesquisar();
  }

  salvar(form: NgForm) {
    console.log(moment().format('YYYY-MM-DD'));
    this.situacao = form.value.situacao;
    this.viabilidade = form.value.viabilidade;
    this.pesquisar();
  }

  pesquisar() {
    const filtro: CadastroFiltro = {
      situacao: this.situacao,
      viabilidade: this.viabilidade,
    };

    this.service.pesquisar(filtro)
      .then(resposta => this.cadastros = resposta);
  }

  excluir(cadastro: any) {
    this.service.excluir(cadastro.id)
    .then(() => {
      console.log('excluido');
      this.pesquisar();
      this.toasty.success('Ideia excluida com sucesso!');
    });
   }

}

