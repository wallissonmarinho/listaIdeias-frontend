import { Component, OnInit } from '@angular/core';

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
    { label: 'Registrada', value: 'Registrada' },
    { label: 'Em Desenvolvimento', value: 'Em Desenvolvimento' },
    { label: 'Cancelada', value: 'Cancelada' },
    { label: 'Desenvolvida', value: 'Desenvolvida' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

