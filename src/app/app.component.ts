
import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;

  cadastros: Array<any>;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.listar()
      .subscribe(resposta => this.cadastros = resposta);
  }
}
