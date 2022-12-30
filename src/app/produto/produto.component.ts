import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.sass']
})
export class ProdutoComponent implements OnInit {

  constructor(private produtosService: ProdutosService, private _router: Router, private router: ActivatedRoute, private carrinhoService: CarrinhoService) { 
  }
  produtoId: any;
  produtos: any;

  ngOnInit(){
    this.produtoId = parseInt(this.router.snapshot.paramMap.get('id') || '');
    this.obterSomenteUm();

  }

  obterSomenteUm(){
    this._router.navigate(['/produtos', parseInt(this.produtoId)]);
    this.produtosService.obterPorId(parseInt(this.produtoId))
    .then((produtos) => {
      this.produtos = produtos;
      console.log(produtos);
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
