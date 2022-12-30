import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.sass']
})
export class CarrinhoComponent implements OnInit {

  
  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    var cartSession = sessionStorage.getItem("carrinho");

  }

  items(): Produto[] {
    return this.carrinhoService.items;
  }

  removeItem(produto: Produto){
    let c = this.carrinhoService;
    
    return c.removeItem(produto);


  }

  total() :number{
    return this.carrinhoService.total();
  }
}
