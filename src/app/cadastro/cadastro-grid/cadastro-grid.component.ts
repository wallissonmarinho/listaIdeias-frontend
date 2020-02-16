import { Component, OnInit } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-cadastro-grid',
  templateUrl: './cadastro-grid.component.html',
  styleUrls: ['./cadastro-grid.component.css']
})
export class CadastroGridComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  cadastros: Array<any>;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.listar()
      .subscribe(resposta => this.cadastros = resposta);
  }

}
