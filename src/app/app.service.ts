import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Cadastrar } from './cadastro/model';



export interface CadastroFiltro {
    situacao: string;
    viabilidade: string;
}

@Injectable({
    providedIn: 'root'
})
export class AppService  {

    cadastroUrl = '/api/cadastros';

    constructor(private http: HttpClient) { }

    pesquisar(filtro: CadastroFiltro): Promise<any> {
        let params = new HttpParams();

        if (filtro.situacao) {
            params = params.set('situacao', filtro.situacao);
        }

        if (filtro.viabilidade) {
            params = params.set('viabilidade', filtro.viabilidade);
        }

        return this.http.get(`${this.cadastroUrl}?resumo`, { params })
            .toPromise()
            .then(resposta => resposta);
    }

    excluir(id: number): Promise<void> {
        return this.http.delete(`${this.cadastroUrl}/${id}`)
        .toPromise()
        .then(() => null);
    }

    adicionar(cadastrar: Cadastrar): Promise<Cadastrar> {
        return this.http.post<Cadastrar>(this.cadastroUrl, cadastrar)
          .toPromise();
      }
}


