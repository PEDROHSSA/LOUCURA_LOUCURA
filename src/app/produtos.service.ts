import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { InterfaceProduto } from './Interface-Produtos';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private httpClient: HttpClient) { }

  obterTodos(){
    return this.httpClient.get<InterfaceProduto[]>(`${API_PATH}`).toPromise();
  }

  obterPorId(id: number){
    return this.httpClient.get<InterfaceProduto[]>(`${API_PATH}/${id}`).toPromise();
  }
}
