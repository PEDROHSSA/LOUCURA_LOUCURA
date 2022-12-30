import { Injectable } from '@angular/core';
import { Produto } from './produto.model';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutosService } from './produtos.service';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  constructor() { }

  items: Produto[] = [];

  addItem(item: Produto){
    this.items.push(item)
    sessionStorage.setItem("cart",JSON.stringify(this.items))
}

removeItem(produto: Produto){
    this.items.splice(this.items.indexOf(produto), 1)
    //salva na sessão
    sessionStorage.setItem("carrinho",JSON.stringify(this.items))   
}

total() :number{
    return this.items
    .map(item => item.preco)
    .reduce((prev, value)=> prev+value, 0)
}
}

