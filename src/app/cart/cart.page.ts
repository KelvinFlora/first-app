import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  myOrders: any[] = [];

  constructor(private orderService: OrderService) {}

  ionViewDidEnter() {
    this.myOrders = this.orderService.getOrders();
  }

  ngOnInit() {}
}
