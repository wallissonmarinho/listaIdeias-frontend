import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';



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

    criar(cadastro: any) {
        return this.http.post(this.cadastroUrl, cadastro);
    }
}


