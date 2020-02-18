import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

import { CadastroModule } from './cadastro/cadastro.module';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { ToastyModule } from 'ng2-toasty';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarraDeMenuComponent } from './barra-de-menu/barra-de-menu.component';
import { CadastrosPesquisaComponent } from './cadastro/cadastros-pesquisa/cadastros-pesquisa.component';
import { CadastroCadastroComponent } from './cadastro/cadastro-cadastro/cadastro-cadastro.component';

const rotas: Routes = [
  { path: 'ideias', component: CadastrosPesquisaComponent},
  { path: 'ideias/novo', component: CadastroCadastroComponent},
  { path: 'ideias/:id', component: CadastroCadastroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BarraDeMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    CadastroModule,
    ToastyModule.forRoot(),
    ConfirmDialogModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
