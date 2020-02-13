import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    cadastroUrl = '/api/cadastros';

    constructor(private http: HttpClient) { }

    listar() {
        return this.http.get<Array<any>>(this.cadastroUrl);
    }

    criar(cadastro: any) {
        return this.http.post(this.cadastroUrl, cadastro);
    }
}
