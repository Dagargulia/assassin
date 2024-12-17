import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-packet',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './packet.component.html',
  styleUrls: ['./packet.component.css'],
})
export class PacketComponent implements OnInit {
  packetItems: any[] = [];
  isDarkMode: boolean = false;
  purchaseMessage: string = ''; // To store the purchase summary
  showModal: boolean = false; // Controls modal visibility
  purchaseHistory: any[] = []; // Store completed purchases

  ngOnInit(): void {
    // Load packet items from sessionStorage
    const savedItems = sessionStorage.getItem('packetItems');
    if (savedItems) {
      this.packetItems = JSON.parse(savedItems);
    }

    // Load purchase history from localStorage
    const savedHistory = localStorage.getItem('purchaseHistory');
    if (savedHistory) {
      this.purchaseHistory = JSON.parse(savedHistory);
    }
  }

  deleteItem(index: number): void {
    if (index >= 0 && index < this.packetItems.length) {
      this.packetItems.splice(index, 1); // Remove item at the given index
      sessionStorage.setItem('packetItems', JSON.stringify(this.packetItems)); // Update sessionStorage
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  getTotalPrice(): number {
    return this.packetItems.reduce((total, item) => total + (item.price || 0), 0);
  }

  buyProducts(): void {
    if (this.packetItems.length > 0) {
      const totalPrice = this.getTotalPrice();
      const itemsSummary = this.packetItems.map(item => `${item.name} - $${item.price}`).join('<br>');

      // Save the purchase to history
      const purchase = {
        date: new Date().toLocaleString(),
        items: [...this.packetItems],
        total: totalPrice,
      };
      this.purchaseHistory.unshift(purchase);
      localStorage.setItem('purchaseHistory', JSON.stringify(this.purchaseHistory));

      this.purchaseMessage = `
        <h3>Purchase Summary</h3>
        <p>${itemsSummary}</p>
        <h4>Total: $${totalPrice.toFixed(2)}</h4>
      `;
      this.showModal = true;

      // Clear the packet after purchase
      this.packetItems = [];
      sessionStorage.removeItem('packetItems');
    } else {
      this.purchaseMessage = `<p>Your packet is empty! Add some items before purchasing.</p>`;
      this.showModal = true;
    }
  }

  closeModal(): void {
    this.showModal = false; // Hide modal
  }
}
