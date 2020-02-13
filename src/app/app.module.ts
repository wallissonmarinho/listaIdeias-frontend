import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrosPesquisaComponent } from './cadastros-pesquisa/cadastros-pesquisa.component';
import { BarraDeMenuComponent } from './barra-de-menu/barra-de-menu.component';
import { CadastroCadastroComponent } from './cadastro-cadastro/cadastro-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrosPesquisaComponent,
    BarraDeMenuComponent,
    CadastroCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    FontAwesomeModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
