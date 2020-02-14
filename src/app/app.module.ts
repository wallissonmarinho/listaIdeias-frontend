import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';

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
    TooltipModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
