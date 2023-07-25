import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  constructor() {}
  prenumber: number = 1;

  xtudo = {
    id: 1,
    title: 'X-Tudo Super',
    category: 'Lanches',
    specs: [
      'Hambúrguer',
      'Salada',
      'Tomate',
      'Maionese',
      'Bacon',
      'Queijo',
      'Calabresa',
    ],
  };

  xbacon = {
    id: 2,
    title: 'X-Bacon',
    category: 'Lanches',
    specs: ['Hambúrguer', 'Salada', 'Tomate', 'Maionese', 'Queijo', 'Bacon'],
  };

  xsalada = {
    id: 3,
    title: 'X-Salada',
    category: 'Lanches',
    specs: ['Hambúrguer', 'Salada', 'Tomate', 'Maionese', 'Queijo', 'Bacon'],
  };

  xburguer = {
    id: 4,
    title: 'X-Burguer',
    category: 'Lanches',
    specs: ['Hambúrguer', 'Maionese', 'Queijo'],
  };

  parmegiana = {
    id: 5,
    title: 'Parmegiana de Frango',
    category: 'Comidas',
    specs: ['Arroz', 'Parmegiana de Frango', 'Batata Frita'],
  };

  picanha = {
    id: 6,
    title: 'Picanha',
    category: 'Comidas',
    specs: ['Arroz', 'Picanha', 'Salada'],
  };

  frango = {
    id: 7,
    title: 'Filé de Frango',
    category: 'Comidas',
    specs: ['Arroz', 'Feijão', 'Filé de Frango', 'Purê de Batata'],
  };

  costela = {
    id: 8,
    title: 'Costela de Porco',
    category: 'Comidas',
    specs: ['Arroz', 'Costela de Porco', 'Batata Frita'],
  };

  sprite = {
    id: 9,
    title: 'Refrigerante Sprite',
    category: 'Bebidas',
    specs: ['Sprite 350ml', 'Sprite 600ml', 'Sprite 1,5L'],
  };

  coca = {
    id: 10,
    title: 'Refrigerante Coca-Cola',
    category: 'Bebidas',
    specs: ['Coca-Cola 350ml', 'Coca-Cola 600ml', 'Coca-Cola 1,5L'],
  };

  suco = {
    id: 11,
    title: 'Suco Natural',
    category: 'Bebidas',
    specs: [
      'Suco de Laranja',
      'Suco de Abacaxi',
      'Suco de Maracujá',
      'Suco de Morango',
    ],
  };

  agua = {
    id: 12,
    title: 'Água Mineral',
    category: 'Bebidas',
    specs: ['Água Mineral 600ml', 'Água Mineral 1L'],
  };

  petit = {
    id: 13,
    title: 'Petit Gateau',
    category: 'Sobremesas',
    specs: ['Chocolate', 'Creme'],
  };

  sorvete = {
    id: 14,
    title: 'Sorvete',
    category: 'Sobremesas',
    specs: ['Chocolate', 'Morango', 'Creme', 'Flocos'],
  };

  banana = {
    id: 15,
    title: 'Banana Split',
    category: 'Sobremesas',
    specs: ['Sorvete de Chocolate', 'Sorvete de Morango', 'Sorverte de Creme'],
  };

  brigadeiro = {
    id: 16,
    title: 'Brigadeiro',
    category: 'Sobremesas',
    specs: ['Chocolate', 'Morango', 'Maracujá', 'Danone'],
  };

  ngOnInit() {}
}
