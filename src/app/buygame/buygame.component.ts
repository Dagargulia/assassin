import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-buygame',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor,RouterModule],
  templateUrl: './buygame.component.html',
  styleUrls: ['./buygame.component.css']
})
export class BuyGameComponent {
  cardIndex = 0;
  showAlert = false;
  showError = false;

  cards = [
    {
      id: 0,
      cardNumber: '1234 5678 9876 5432',
      expiryDate: '07/19',
      cardHolder: 'J Thomson',
      type: 'visa-curved-64px',
      transactions: [
        { date: '01/02/2016', merchant: 'Apple', price: '205.25' },
        { date: '05/02/2016', merchant: 'Jack & Jones', price: '32.95' },
        { date: '12/02/2016', merchant: 'F&B', price: '47.22' },
        { date: '14/02/2016', merchant: 'Swarovski', price: '325' }
      ]
    }
  ];

  choice = 'visa-curved-64px';
  number = '';
  name = '';
  expiry = '';

  // Card Type Selection
  chooseCardType(cardType: string): void {
    this.choice = cardType;
    this.showError = false;  // Reset error when card type is selected
  }

  // Close Form
  closeForm(): void {
    const form = document.querySelector('.create') as HTMLElement;
    if (form) {
      form.style.opacity = '0';
      form.style.pointerEvents = 'none';
    }
  }

  // Add Card
  addCard(): void {
    if (!this.number || !this.name || !this.expiry) {
      this.showError = true;
      return;
    }

    setTimeout(() => {
      this.cards.push({
        id: this.cards.length + 1,
        cardNumber: this.number,
        cardHolder: this.name,
        expiryDate: this.expiry,
        type: this.choice,
        transactions: [
          { date: '10/02/2016', merchant: 'Jack & Jones', price: '79.87' },
          { date: '12/02/2016', merchant: 'Cadwalders', price: '7.25' },
          { date: '15/02/2016', merchant: 'Bella Italia', price: '62.70' },
          { date: '15/02/2016', merchant: 'Odeon', price: '24.99' }
        ]
      });
      console.log('New card added:', this.cards);
    }, 700);

    // Reset input fields after adding
    this.number = '';
    this.name = '';
    this.expiry = '';
  }

  // Buy Game Function
  buyGame(): void {
    if (this.cards.length > 0 && this.number && this.name && this.expiry) {
      this.showAlert = true;
      console.log('Game purchased successfully!');
    } else {
      this.showError = true;
      console.error('Please add a valid card before purchasing.');
    }
  }

  // Close Alert
  closeAlert(): void {
    this.showAlert = false;
  }
}
