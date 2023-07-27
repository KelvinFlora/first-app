import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  constructor(private route: ActivatedRoute) {}
  id: Number;

  item = {
    id: 2,
    title: 'X-Bacon',
    category: 'Lanches',
    specs: ['Hambúrguer', 'Salada', 'Tomate', 'Maionese', 'Queijo', 'Bacon'],
    img: 'assets/images/x-bacon.jpg',
  };

  fakeApiData = [
    {
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
      img: 'assets/images/x-tudo.jpg',
    },
    {
      id: 2,
      title: 'X-Bacon',
      category: 'Lanches',
      specs: ['Hambúrguer', 'Salada', 'Tomate', 'Maionese', 'Queijo', 'Bacon'],
      img: 'assets/images/x-bacon.jpg',
    },
    {
      id: 3,
      title: 'X-Salada',
      category: 'Lanches',
      specs: ['Hambúrguer', 'Salada', 'Tomate', 'Maionese', 'Queijo', 'Bacon'],
      img: 'assets/images/x-salada.jpg',
    },
    {
      id: 4,
      title: 'X-Burguer',
      category: 'Lanches',
      specs: ['Hambúrguer', 'Maionese', 'Queijo'],
      img: 'assets/images/x-burguer.jpg',
    },
    {
      id: 5,
      title: 'Parmegiana de Frango',
      category: 'Comidas',
      specs: ['Arroz', 'Parmegiana de Frango', 'Batata Frita'],
      img: 'assets/images/parmegiana.jpeg',
    },
    {
      id: 6,
      title: 'Picanha',
      category: 'Comidas',
      specs: ['Arroz', 'Picanha', 'Salada'],
      img: 'assets/images/picanha.jpeg',
    },
    {
      id: 7,
      title: 'Filé de Frango',
      category: 'Comidas',
      specs: ['Arroz', 'Feijão', 'Filé de Frango', 'Purê de Batata'],
      img: 'assets/images/frango.jpeg',
    },
    {
      id: 8,
      title: 'Costela de Porco',
      category: 'Comidas',
      specs: ['Arroz', 'Costela de Porco', 'Batata Frita'],
      img: 'assets/images/costela.jpeg',
    },
    {
      id: 9,
      title: 'Refrigerante Sprite',
      category: 'Bebidas',
      specs: ['Sprite 350ml', 'Sprite 600ml', 'Sprite 1,5L'],
      img: 'assets/images/sprite.jpeg',
    },
    {
      id: 10,
      title: 'Refrigerante Coca-Cola',
      category: 'Bebidas',
      specs: ['Coca-Cola 350ml', 'Coca-Cola 600ml', 'Coca-Cola 1,5L'],
      img: 'assets/images/coca.jpeg',
    },
    {
      id: 11,
      title: 'Suco Natural',
      category: 'Bebidas',
      specs: [
        'Suco de Laranja',
        'Suco de Abacaxi',
        'Suco de Maracujá',
        'Suco de Morango',
      ],
      img: 'assets/images/suco.jpeg',
    },
    {
      id: 12,
      title: 'Água Mineral',
      category: 'Bebidas',
      specs: ['Água Mineral 600ml', 'Água Mineral 1L'],
      img: 'assets/images/agua.jpeg',
    },
    {
      id: 13,
      title: 'Petit Gateau',
      category: 'Sobremesas',
      specs: ['Chocolate', 'Creme'],
      img: 'assets/images/petit.jpeg',
    },
    {
      id: 14,
      title: 'Sorvete',
      category: 'Sobremesas',
      specs: ['Chocolate', 'Morango', 'Creme', 'Flocos'],
      img: 'assets/images/sorvete.jpeg',
    },
    {
      id: 15,
      title: 'Banana Split',
      category: 'Sobremesas',
      specs: [
        'Sorvete de Chocolate',
        'Sorvete de Morango',
        'Sorverte de Creme',
      ],
      img: 'assets/images/banana.jpeg',
    },
    {
      id: 16,
      title: 'Brigadeiro',
      category: 'Sobremesas',
      specs: ['Chocolate', 'Morango', 'Maracujá', 'Danone'],
      img: 'assets/images/brigadeiro.jpeg',
    },
  ];

  amount = 1;

  minusAmount() {
    if (this.amount > 0) {
      this.amount -= 1;
    }
  }

  plusAmount() {
    if (this.amount < 20) {
      this.amount += 1;
    }
  }

  shouldCheckboxBeChecked(category: string): boolean {
    return category !== 'Sobremesas' && category !== 'Bebidas';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      this.item = this.fakeApiData[id - 1];
    });
  }
}
