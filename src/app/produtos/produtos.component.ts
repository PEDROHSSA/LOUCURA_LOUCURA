import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.sass']
})
export class ProdutosComponent implements OnInit {
  produtos: any;

  constructor(private produtosService: ProdutosService, private router: Router, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.obterTodosProdutos();
  }

  obterTodosProdutos(){
    this.router.navigate(['/produtos']);
    this.produtosService.obterTodos()
      .then((produtos) => {
        this.produtos = produtos;
      })
      .catch((err) => {

        debugger
        var erros = err;
      });
  }

  adicionaraoCarrinho(produto: Produto){
    this.carrinhoService.addItem(produto);

  }

}
