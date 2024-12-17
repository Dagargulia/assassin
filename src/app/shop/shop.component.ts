import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from './prodact.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  merchItems = [
    {
      imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-8-bit-retro-style-t-shirt-xhjdq.jpg',
      name: 'Assassins Creed 8-Bit Retro Style T-Shirt',
      price: '$24.95'
    },
    {
      imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-3-revolutionary-hoodie-h1v2w.jpg',
      name: 'Assassins Creed 3 Revolutionary Hoodie',
      price: '$39.95'
    },
    {
      imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-3-revolutionary-theme-sweatshirt-l9jsy.jpg',
      name: 'Assassins Creed 3 Revolutionary Theme Sweatshirt',
      price: '$39.95'
    },
    {
      imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/a-letter-for-me-from-syndicate-romantic-and-nostalgic-design-mouse-pad-6ilaf.jpg',
      name: 'A Letter for Me from Syndicate Romantic and Nostalgic ',
      price: '$19.95'
    },
    {
      imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-classic-and-timeless-style-tapestry-tyudp.jpg',
      name: 'Assassins Creed Classic and Timeless Style Tapestry',
      price: '$38.95'
    }
  ];
  products: Product[] = [
    { name: 'Assassins Creed 3D Logo Grey Shirt', price: 24.95, imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-3d-logo-grey-shirt-s0uih.jpg' },
    { name: '15th Anniversary Kassandra the Odyssey Warrior T-Shirt', price: 24.95, imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/15th-anniversarykassandra-the-odyssey-warrior-t-shirt-xygbl.jpg' },
    { name: 'Assassins Creed Odyssey Alexios on Horseback T-Shirt', price: 24.95, imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-odyssey-alexios-on-horseback-t-shirt-pleue.jpg' },
    { name: 'Assassins Creed Hidden Blade Graphic T-Shirt ASC114', price: 24.95, imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-hidden-blade-graphic-t-shirt-asc114-rdzrv.jpg' },
    { name: 'Assassins Creed Origins Bayek and Senu Double Exposure Shirt', price: 24.95, imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-bayek-and-senu-double-exposure-shirt-gzhnl.jpg' },
    { name: 'Assassins Creed Origins Bayek Shirt', price: 24.95, imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-bayek-shirt-zena1.jpg' },
    { name: 'Assassins Creed 15th Anniversary Logo Collection Shirt', price: 24.95, imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-15th-anniversary-logo-collection-shirt-jflwi.jpg' },
    { name: 'Assassins Creed Valhalla Celtic Weapons Logo Shirt', price: 24.95, imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-valhalla-celtic-weapons-logo-shirt-xn2kb.jpg' },
    { name: 'Black Flag The Pirate Skull Logo of the Caribbean Adventure T-Shirt', price: 24.95, imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/black-flagthe-pirate-skull-logo-of-the-caribbean-adventure-t-shirt-k8fjs.jpg' },
    { name: 'Odyssey Kassandra Warrior T-Shirt', price: 24.95, imageUrl: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/odyssey-kassandra-warrior-t-shirt-x8ltr.jpg' }
  ];

  


  isDarkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  // Toggle between light and dark modes
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  
}

