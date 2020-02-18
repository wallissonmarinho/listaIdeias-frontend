import { AppService, CadastroFiltro } from './../../app.service';

import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-cadastros-pesquisa',
  templateUrl: './cadastros-pesquisa.component.html',
  styleUrls: ['./cadastros-pesquisa.component.css']
})
export class CadastrosPesquisaComponent implements OnInit {

  viabilidadeopcao = [
    { label: '5', value: '5' },
    { label: '4', value: '4' },
    { label: '3', value: '3' },
    { label: '2', value: '2' },
    { label: '1', value: '1' },
    { label: 'Todas', value: '' },
  ];

  situacaoopcao = [
    { label: 'Registrada', value: 'REGISTRADA' },
    { label: 'Em Desenvolvimento', value: 'DESENVOLVIMENTO' },
    { label: 'Cancelada', value: 'CANCELADA' },
    { label: 'Desenvolvida', value: 'DESENVOLVIDA' },
    { label: 'Todas', value: '' },
  ];

  faPen = faPen;
  faTrash = faTrash;

  situacao: string;

  viabilidade: string;

  cadastros: Array<any>;

  constructor(private service: AppService,
              private toasty: ToastyService,
              private confirmationService: ConfirmationService,
  ) { }

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

  confirmarExclusao(cadastro: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(cadastro);
      }
    });
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

