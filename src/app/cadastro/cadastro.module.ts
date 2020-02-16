import { CadastrosPesquisaComponent } from './cadastros-pesquisa/cadastros-pesquisa.component';
import { CadastroCadastroComponent } from './cadastro-cadastro/cadastro-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CadastroGridComponent } from './cadastro-grid/cadastro-grid.component';



@NgModule({
  declarations: [
    CadastroCadastroComponent,
    CadastrosPesquisaComponent,
    CadastroGridComponent
  ],
  exports: [
    CadastroCadastroComponent,
    CadastrosPesquisaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FontAwesomeModule,
    TooltipModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextareaModule,
  ]
})
export class CadastroModule { }
