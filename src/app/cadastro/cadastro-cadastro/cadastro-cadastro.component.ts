import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { Cadastrar } from '../model';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-cadastro',
  templateUrl: './cadastro-cadastro.component.html',
  styleUrls: ['./cadastro-cadastro.component.css']
})
export class CadastroCadastroComponent implements OnInit {

  viabilidade = [
    { label: '5', value: '5' },
    { label: '4', value: '4' },
    { label: '3', value: '3' },
    { label: '2', value: '2' },
    { label: '1', value: '1' },
  ];

  situacao = [
    { label: 'Registrada', value: 'REGISTRADA' },
    { label: 'Em Desenvolvimento', value: 'DESENVOLVIMENTO' },
    { label: 'Cancelada', value: 'CANCELADA' },
    { label: 'Desenvolvida', value: 'DESENVOLVIDA' },
  ];

  cadastrar = new Cadastrar();

  constructor(private service: AppService,
              private toasty: ToastyService,
              private rota: ActivatedRoute
     ) { }

  ngOnInit(): void {
    console.log(this.rota.snapshot.params['id']);

    const idCadastro = this.rota.snapshot.params['id'];

    if (idCadastro) {
      this.carregarCadastro(idCadastro);
    }
  }

  get editando() {
    return Boolean(this.cadastrar.id);
  }

  carregarCadastro(id: number) {
    this.service.buscarPorId(id)
    .then(cadastrar => {
      this.cadastrar = cadastrar;
      console.log(this.cadastrar);
    });
  }

  salvar(form: NgForm) {
    this.cadastrar.dataCadastro = moment().format('YYYY-MM-DD');

    console.log(this.cadastrar);

    this.service.adicionar(this.cadastrar)
      .then(() => {
        this.toasty.success('Cadastrado com sucesso!');
        form.reset();
      });
  }

}

