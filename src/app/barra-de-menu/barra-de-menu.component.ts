import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barra-de-menu',
  templateUrl: './barra-de-menu.component.html',
  styleUrls: ['./barra-de-menu.component.css']
})
export class BarraDeMenuComponent implements OnInit {

  menu: boolean;

  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

}
