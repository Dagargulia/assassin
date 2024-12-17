import { Injectable } from '@angular/core';

interface CartItem {
  name: string;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  addToCart(name: string, image: string, quantity: number): void {
    const existingItem = this.cartItems.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ name, image, quantity });
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
}
