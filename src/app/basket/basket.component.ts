import { Component, OnInit } from '@angular/core';
import { Games } from '../game';
import { BasketService } from '../services/basket.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  standalone: true, // If this component is standalone, add this line
  imports: [CommonModule,RouterModule] // Add CommonModule here to use directives like *ngFor
})
export class BasketComponent implements OnInit {
  basket: Games[] = [];

  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.basket = this.basketService.getBasketItems();
  }
  delete(game:Games) {
    this.basket = this.basket.filter(_game => game.Name !== _game.Name);
  }
  alertVisible: boolean = false;

  showSuccessAlert() {
    this.alertVisible = true;
    setTimeout(() => {
      this.alertVisible = false;
    }, 3000); // Hide alert after 3 seconds
  }
  

  
  
  
}
