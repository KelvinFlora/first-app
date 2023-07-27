import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private myOrders: any[] = [];

  constructor() {}

  addOrder(order: any) {
    if (!this.myOrders.some((o) => o.id === order.id)) {
      this.myOrders.push(order);
    }
  }

  getOrders() {
    return this.myOrders;
  }
}
