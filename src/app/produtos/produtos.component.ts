import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  produto : Produto[] = [];

  constructor (private ProdutoService : ProdutoService) {}

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos() {
    this.ProdutoService.getProdutos().subscribe({
      next : data => this.produto = data
    });
  }
}
