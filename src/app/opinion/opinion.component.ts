import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,  } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  image: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-opinion',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css'],
})
export class OpinionComponent implements OnInit {
  product: Product | null = null;
  colors: string[] = ['Red', 'Blue', 'Black', 'White', 'Green'];
  sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];
  quantity: number = 1;
  isDarkMode: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productData = history.state.product;
    if (productData) {
      this.product = productData as Product;
    }
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  addToPacket(): void {
    if (this.product) {
      const packetItem = {
        name: this.product.name,
        image: this.product.image,
        price: this.product.price,
      };

      // Get existing items from sessionStorage
      const savedItems = sessionStorage.getItem('packetItems');
      const packetItems = savedItems ? JSON.parse(savedItems) : [];
      
      // Add new item to the array
      packetItems.push(packetItem);

      // Save updated list of items back to sessionStorage
      sessionStorage.setItem('packetItems', JSON.stringify(packetItems));

      alert(`${this.product.name} has been added to your packet!`);
    }
  }
}
