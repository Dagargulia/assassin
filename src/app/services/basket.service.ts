// src/app/services/basket.service.ts
import { Injectable } from '@angular/core';
import { Games } from '../game';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private basket: Games[] = [];

  addToBasket(game: Games) { console.log ('hi')
    this.basket.push(game);
    console.log(this.basket)
  }

  getBasketItems(): Games[] {
    return this.basket;
  }
}
