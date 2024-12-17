import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


interface Product {
  name: string;
  image: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-shop-top',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './shop-top.component.html',
  styleUrls: ['./shop-top.component.css']
})
export class ShopTopComponent implements OnInit {
  isDarkMode: boolean = false;
  searchQuery: string = '';
  sortOption: string = 'popularity';
  categories: string[] = ['T-Shirts', 'Hoodies', 'Sweatshirts', 'Accessories', 'Home Decor','Tote Bags'];
  products: Product[] = [
    { name: 'Assassins Creed 3D Logo Grey Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-3d-logo-grey-shirt-s0uih.jpg', price: 24.95, category: 'T-Shirts' },
    { name: '15th Anniversary Kassandra the Odyssey Warrior T-Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/15th-anniversarykassandra-the-odyssey-warrior-t-shirt-xygbl.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Assassins Creed 15th Anniversary Logo Collection Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-15th-anniversary-logo-collection-shirt-jflwi.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Assassins Creed Valhalla Celtic Weapons Logo Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-valhalla-celtic-weapons-logo-shirt-xn2kb.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Assassins Creed The Look Hoodie', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-the-look-hoodie-prkdc.jpg', price: 39.95, category: 'Hoodies' },
    { name: 'Stained Glass Series Ezio Beautiful and Graceful Style Tapestry', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/stained-glass-series-ezio-beautiful-and-graceful-style-tapestry-g6g7g.jpg', price: 39.95, category: 'Home Decor' },
    { name: 'Assassins Creed Odyssey Alexios on Horseback T-Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-odyssey-alexios-on-horseback-t-shirt-pleue.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Assassins Creed Hidden Blade Graphic T-Shirt ASC114', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-hidden-blade-graphic-t-shirt-asc114-rdzrv.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Assassins Creed Origins Bayek and Senu Double Exposure Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-bayek-and-senu-double-exposure-shirt-gzhnl.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Assassins Creed Origins Bayek Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-bayek-shirt-zena1.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Black FlagThe Pirate Skull Logo of the Caribbean Adventure T-Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/black-flagthe-pirate-skull-logo-of-the-caribbean-adventure-t-shirt-k8fjs.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Odyssey Kassandra Warrior T-Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/odyssey-kassandra-warrior-t-shirt-x8ltr.jpg', price: 24.95, category: 'T-Shirts' },
    
      { 
        name: 'Assassins Creed Origins Bayek and Aya Double Exposure Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-bayek-and-aya-double-exposure-shirt-qb7hu.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'KassandraThe Fierce and Fearless Heroine of Assassins Creed Odyssey T-Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/kassandrathe-fierce-and-fearless-heroine-of-assassins-creed-odyssey-t-shirt-mzwg5.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Ezio Quote Gift Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-ezio-quote-gift-shirt-zrea5.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Ezio Requiescat In Pace T-Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-ezio-requiescat-in-pace-t-shirt-ir5nu.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Origins Cursed Love A Tragic Story of Romance and Betrayal T-Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/origins-cursed-love-a-tragic-story-of-romance-and-betrayal-t-shirt-vn8t3.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Ezio Auditore Silhouette Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-ezio-auditore-silhouette-shirt-x5qrx.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'EzioThe Master Assassin in Action T-Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/eziothe-master-assassin-in-action-t-shirt-d1een.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Cool Assassins Montage Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/cool-assassins-montage-shirt-k6jlu.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Gaming A Simple and Sleek Logo for the Ultimate Gamers T-Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-gaminga-simple-and-sleek-logo-for-the-ultimate-gamers-t-shirt-roxrn.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Eivor Celtic Art Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-eivor-celtic-art-shirt-5bgtu.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Destiny Weaver Artwork Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-destiny-weaver-artwork-shirt-knd2k.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Black Beard Pirate T-Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-black-beard-pirate-t-shirt-nziyw.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Arno Dorian Illustration Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-arno-dorian-illustration-shirt-ubstj.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Stained Glass Edward Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-stained-glass-edward-shirt-y7d7o.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Character with Logo Design Essential T-Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/character-with-logo-design-essential-t-shirt-sfzuj.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Ezio Auditore Portrait Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-ezio-auditore-portrait-shirt-fp9vl.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Stained Glass Connor Shirt', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-stained-glass-connor-shirt-8gevr.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },
      { 
        name: 'Assassins Creed Revelations Altair Shirt ASC183', 
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-revelations-altair-shirt-asc183-hsta1.jpg', 
        price: 24.95, 
        category: 'T-Shirts' 
      },{
        name: 'Assassins Creed The Look Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-the-look-hoodie-prkdc.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed Valhalla Viking Raven Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-valhalla-viking-raven-hoodie-f0yad.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed Black Flag Pirate Skull Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-black-flag-pirate-skull-hoodie-enzja.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Origins Double Exposure 2 Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/origins-double-exposure-2-hoodie-ilq7i.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed Logo Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-logo-hoodie-gh7zq.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed Red Pattern Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-red-pattern-hoodie-zffks.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Connor Kenway Assassins Creed 3 Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/connor-kenway-assassins-creed-3-hoodie-xnzmg.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Haytham Kenway 3 Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/haytham-kenway-3-hoodie-lyucw.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed Odyssey Alexios on Mount Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-odyssey-alexios-on-mount-hoodie-moeza.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Ezio Assassins Creed Renaissance Master Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/ezio-assassins-creed-renaissance-master-hoodie-jgzxx.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Hidden Blade Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/hidden-blade-hoodie-ptk4v.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed Altair Artwork Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-altair-artwork-hoodie-gbjgh.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed Animus Project Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-animus-project-hoodie-xwi5d.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed Kassandra Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-kassandra-hoodie-a6exs.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Origins Double Exposure 1 Artistic Design Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/origins-double-exposure-1-artistic-design-hoodie-rappe.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Eivor Celtic Portrait Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/eivor-celtic-portrait-hoodie-xpxxx.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Requiescat In Pace Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/requiescat-in-pace-hoodie-0v5qh.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Requiescat In Pace Assassins Creed Gifts Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/requiescat-in-pace-assassins-creed-gifts-hoodie-bsprj.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed Origins Cursed Love Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-cursed-love-hoodie-ba9cp.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Ezio Assassins Creed Renaissance Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/ezio-assassins-creed-renaissance-hoodie-ylogt.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed The Mercenary Hood Design Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-the-mercenary-hood-design-hoodie-nfoqt.jpg',
        price: 39.95,
        category: 'Hoodies'
      },
      {
        name: 'Assassins Creed Unity Warrior Logo Design Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-unity-warrior-logo-design-sweatshirt-uhss7.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Unity Arno Watercolor Artwork Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-unity-arno-watercolor-artwork-sweatshirt-yxob7.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Geometric Logo Design Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-geometric-logo-design-sweatshirt-ovajn.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Odyssey Alexios Stamp Logo Design Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-odyssey-alexios-stamp-logo-design-hoodie-zre0r.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Odyssey Kassandra Warrior Walk Artwork Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-odyssey-kassandra-warrior-walk-artwork-sweatshirt-lncb1.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'The Rooks Assassins Creed Syndicate Hoodie ASC195',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/the-rooks-assassins-creed-syndicate-hoodie-asc195-ajtng.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Syndicate The Rooks Gang Theme Sweatshirt ASC216',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-syndicate-the-rooks-gang-theme-sweatshirt-asc216-mkzzr.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Odyssey Action Adventure Poster Design Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-odyssey-action-adventure-poster-design-sweatshirt-gksii.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Syndicate Theme Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/syndicate-theme-sweatshirt-fmb2r.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Three Assassins Painting Artwork Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-three-assassins-painting-artwork-sweatshirt-spg1l.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Templar Cross Symbol Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-templar-cross-symbol-sweatshirt-wpqd8.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Syndicate The Rooks Gang Theme Sweatshirt ASC186',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-syndicate-the-rooks-gang-theme-sweatshirt-asc186-jvvt2.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Syndicate The Rooks Gang Theme Sweatshirt ASC191',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-syndicate-the-rooks-gang-theme-sweatshirt-asc191-sm42v.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'The Rooks Assassins Creed Syndicate Hoodie ASC200',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/the-rooks-assassins-creed-syndicate-hoodie-asc200-ccjtv.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Origins Theme Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-theme-sweatshirt-xc40d.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Chibi Assassins Creed 3 Cute Characters Hoodie',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/chibi-assassins-creed-3-cute-characters-hoodie-yrnfk.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Chibi Assassins Creed Cute Characters Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/chibi-assassins-creed-cute-characters-sweatshirt-vljf8.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Assassins Creed Games Collection Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-games-collection-sweatshirt-ljpaf.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      {
        name: 'Chibi 2 Cute Characters Sweatshirt',
        image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/chibi-2-cute-characters-sweatshirt-smaov.jpg',
        price: 39.95,
        category: 'Sweatshirts'
      },
      
        {
          name: 'Assassin’s Creed Original Artwork and Logo Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-original-artwork-and-logo-mouse-pad-wydtn.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Assassin’s Creed Kassandra Ancient Greece Theme Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-kassandra-ancient-greece-theme-mouse-pad-alk6c.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Eivor Portrait Celtic Pattern for Gamers Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/eivor-portrait-celtic-pattern-for-gamers-mouse-pad-9rwud.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Assassin’s Creed Eivor Celtic Portrait Vibrant Colors Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-eivor-celtic-portrait-vibrant-colors-mouse-pad-qgjfu.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Assassin’s Creed Countries I’ve Visited World Map and Logo Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-countries-ive-visited-world-map-and-logo-design-mouse-pad-w551h.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Requiescat In Pace Elegant Design Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/requiescat-in-pace-elegant-design-mouse-pad-brrdq.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Assassin’s Creed Gaming Anti-Slip Rubber Base Mouse Pad ASC142',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-gaming-anti-slip-rubber-base-mouse-pad-asc142-q7vug.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Requiescat In Pace Gifts Elegant Design Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/requiescat-in-pace-gifts-elegant-design-mouse-pad-uvn8v.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Assassin’s Creed High-Definition Graphics and Details Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-high-definition-graphics-and-details-mouse-pad-mlctc.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Ezio from Assassin’s Creed Action and Adventure Mouse Pad ASC135',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/ezio-from-assassins-creed-action-and-adventure-mouse-pad-asc135-a2ybn.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Assassin’s Creed Eivor Celtic Portrait Portrait and Quote Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-eivor-celtic-portrait-portrait-and-quote-mouse-pad-ksuj2.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Assassin’s Creed Hidden Blade Black & Red Cool and Bold Design Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-hidden-blade-black-red-cool-and-bold-design-mouse-pad-2h2sp.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Assassin’s Creed Hidden Blade White Gray Stealth and Combat Theme Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-hidden-blade-white-gray-stealth-and-combat-theme-mouse-pad-xs322.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Cool and Stylish Assassin’s Creed for Gamers Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/cool-and-stylish-assassins-creed-for-gamers-mouse-pad-qxiye.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Ezio Auditore from Assassin’s Creed Silhouette Black Background Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/ezio-auditore-from-assassins-creed-silhouette-black-background-mouse-pad-80ewl.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Assassin’s Creed Soft and Comfortable Material Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-soft-and-comfortable-material-mouse-pad-du7dc.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Eivor Portrait High-Definition Graphics and Details Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/eivor-portrait-high-definition-graphics-and-details-mouse-pad-z0ujs.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Starrick’s Soothing Syrup from Assassin’s Creed Syndicate Vintage and Retro Style Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/starricks-soothing-syrup-from-assassins-creed-syndicate-vintage-and-retro-style-mouse-pad-tf4zi.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Starrick’s Soothing Syrup from Assassin’s Creed Syndicate Humorous and Sarcastic Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/starricks-soothing-syrup-from-assassins-creed-syndicate-humorous-and-sarcastic-mouse-pad-wvdjz.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Eivor Portrait Celtic Pattern for Gamers Mouse Pad',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/copy-of-eivor-portrait-celtic-pattern-for-gamers-mouse-pad-9hqhp.jpg',
          price: 19.95,
          category: 'Accessories'
        },
        {
          name: 'Stained Glass Series Ezio Beautiful and Graceful Style Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/stained-glass-series-ezio-beautiful-and-graceful-style-tapestry-g6g7g.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Assassin’s Creed Symbolic and Minimalist Style Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-symbolic-and-minimalist-style-tapestry-f94x4.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Assassin’s Creed Classic and Timeless Style Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-classic-and-timeless-style-tapestry-tyudp.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Kassandra Ancient Greece Theme Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/kassandra-ancient-greece-theme-tapestry-mobzz.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Assassin’s Creed Eivor Celtic Portrait Vibrant Colors and Details Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-eivor-celtic-portrait-vibrant-colors-and-details-tapestry-qkmpc.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Requiescat In Pace Assassin’s Creed Gifts Elegant and Stylish Design Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/requiescat-in-pace-assassins-creed-gifts-elegant-and-stylish-design-tapestry-visyi.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'High-Quality Printing and Details Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/high-quality-printing-and-details-tapestry-bqvll.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Assassin’s Creed Requiescat In Pace Inspirational and Motivational Quote Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-requiescat-in-pace-inspirational-and-motivational-quote-tapestry-cwzq2.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Ezio Auditore from Assassin’s Creed Silhouette Black and White Contrast Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/ezio-auditore-from-assassins-creed-silhouette-black-and-white-contrast-tapestry-moz4e.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Assassin’s Creed Eivor Portrait Viking Theme and Pattern Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-eivor-portrait-viking-theme-and-pattern-tapestry-ondjc.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Destiny Weaver Stunning and Colorful Style Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-eivor-celtic-portrait-viking-theme-and-pattern-tapestry-jhxnh.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Black Beard Pirate Theme Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/destiny-weaver-stunning-and-colorful-style-tapestry-sosgk.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Assassin’s Creed Gothic and Mysterious Style Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-gothic-and-mysterious-style-tapestry-gowkt.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Character Logo Design for Fans and Gamers Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/character-logo-design-for-fans-and-gamers-tapestry-zlxls.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Stained Glass Series Altair Heavenly and Vibrant Style Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/stained-glass-series-altair-elegant-and-vibrant-style-tapestry-vmgxg.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Assassin’s Creed Stained Glass Series Connor Dynamic and Exciting Style Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-stained-glass-series-connor-dynamic-and-exciting-style-tapestry-ry2zu.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Assassin’s Creed Eye-Catching and Bold Design Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-syndicate-the-rooks-gang-symbol-and-motto-tapestry-1sfsq.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Ezio from Assassin’s Creed Action and Adventure Theme Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-eye-catching-and-bold-design-tapestry-lnc6y.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      {
          name: 'Assassin’s Creed Syndicate The Rooks Gang Symbol and Motto Tapestry',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/ezio-from-assassins-creed-action-and-adventure-theme-tapestry-yipbi.jpg',
          price: 38.95,
          category: 'Home Decor'
      },
      { name: 'Assassins Creed Kassandra Ancient Greece Theme Mouse Pad', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/15th-anniversarykassandra-the-odyssey-warrior-t-shirt-xygbl.jpg', price: 19.95, category: 'Accessories' },

      


     
        {
          name: 'Assassins Creed Odyssey Alexios on Mount Ancient Greece Theme and Scenery Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-odyssey-alexios-on-mount-ancient-greece-theme-and-scenery-tote-bag-bicpg.jpg',
          price: 25.95,
          category: 'Tote Bags',
        },
        {
          name: 'Ezio from Assassins Creed Action and Adventure Theme Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/ezio-from-assassins-creed-action-and-adventure-theme-tote-bag-uhgo5.jpg',
          price: 25.95,
          category: 'Tote Bags',
        },
        {
          name: 'Sleek and Stylish Assassin’s Creed Character Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/soft-and-comfortable-material-tote-bag-rmpez.jpg',
          price: 27.95,
          category: 'Tote Bags',
        },
        {
          name: 'Smooth and Easy to Clean Surface Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/smooth-and-easy-to-clean-surface-tote-bag-7hevb.jpg',
          price: 25.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Altair 1 by Aaron Newman Stunning and Colorful Style Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-altair-1-by-aaron-newman-stunning-and-colorful-style-tote-bag-uesbi.jpg',
          price: 26.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Origins Bayek and Aya Double Exposure Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-for-fans-and-gamers-tote-bag-asc136-euuz2.jpg',
          price: 25.95,
          category: 'Tote Bags',
        },
        {
          name: 'Black Beard Pirate Theme Cool Design Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-double-exposure-1-ancient-egypt-theme-and-symbolism-tote-bag-zrane.jpg',
          price: 27.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Stealth and Soul Pirate Theme Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-double-exposure-2-ancient-egypt-theme-and-symbolism-tote-bag-dziic.jpg',
          price: 26.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Stained Glass Series Ezio Beautiful and Graceful Style Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-stealth-and-combat-theme-tote-bag-zfoku.jpg',
          price: 29.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Origins Double Exposure 1 Ancient Egypt Theme and Symbolism Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-requiescat-in-pace-inspirational-and-motivational-quote-tote-bag-c1dsq.jpg',
          price: 25.95,
          category: 'Tote Bags',
        },
        {
          name: 'Cool Eye-Catching and Bold Design Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/cool-eyecatching-and-bold-design-tote-bag-askjj.jpg',
          price: 28.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed for Fans and Gamers Tote Bag ASC136',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/ezio-auditore-from-silhouette-black-and-white-contrast-tote-bag-fkkcz.jpg',
          price: 25.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Illustration Artistic and Creative Design Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-adewale-skull-pirate-theme-and-cool-design-tote-bag-zq8cr.jpg',
          price: 27.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Advanced Modern Stunning Style Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/valhalla-viking-theme-and-pattern-tote-bag-asc154-dxavr.jpg',
          price: 26.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Original and Unique Design Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/pixel-ezio-from-assassins-creed-revelations-retro-and-fun-style-tote-bag-gtxy0.jpg',
          price: 25.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Stained Glass Series Artistic Design Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-soft-and-comfortable-material-tote-bag-xi9qv.jpg',
          price: 28.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Requiem In Peace Inspirational and Motivational Quote Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/highquality-printing-and-details-tote-bag-c8mpi.jpg',
          price: 25.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Destiny Weaver Stunning and Colorful Style Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-gothic-and-mysterious-style-tote-bag-1zwtd.jpg',
          price: 26.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Stealth and Soul Pirate Theme Tote Bag',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/ezio-action-and-adventure-theme-tote-bag-zgrkc.jpg',
          price: 27.95,
          category: 'Tote Bags',
        },
        {
          name: 'Assassins Creed Classic and Timeless Style Tote Bag ASC149',
          image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-classic-and-timeless-style-tote-bag-asc149-g62xm.jpg',
          price: 26.95,
          category: 'Tote Bags',
        },
      ];
      
      
    
    
    
  
  recentlyViewedProducts: Product[] = [
    { name: 'Assassins Creed Kassandra Ancient Greece Theme Mouse Pad', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/15th-anniversarykassandra-the-odyssey-warrior-t-shirt-xygbl.jpg', price: 19.95, category: 'Accessories' },
    { name: 'Odyssey Kassandra Theme Sweatshirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/odyssey-kassandra-warrior-t-shirt-x8ltr.jpg', price: 39.95, category: 'Sweatshirts' },
    { name: 'Assassins Creed Origins Bayek and Senu Double Exposure Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-bayek-and-senu-double-exposure-shirt-gzhnl.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Assassins Creed Origins Bayek Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/assassins-creed-origins-bayek-shirt-zena1.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Black FlagThe Pirate Skull Logo of the Caribbean Adventure T-Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/black-flagthe-pirate-skull-logo-of-the-caribbean-adventure-t-shirt-k8fjs.jpg', price: 24.95, category: 'T-Shirts' },
    { name: 'Odyssey Kassandra Warrior T-Shirt', image: 'https://assassinscreedmerch.com/wp-content/uploads/2023/08/odyssey-kassandra-warrior-t-shirt-x8ltr.jpg', price: 24.95, category: 'T-Shirts' },
  ];
  
  filteredProducts: Product[] = [];

  // Pagination variables
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(private router: Router) {
    this.filteredProducts = [...this.products];
  }
  isAlertVisible = false;
  isCelebrationActive = false;
  alertMessage = '';
  confettiArray: any[] = [];

  showAlert(productName: string) {
    this.alertMessage = `${productName} successfully added to the cart!`;
    this.isAlertVisible = true;

    // Activate celebration
    this.triggerCelebration();

    // Hide the alert after 3 seconds
    setTimeout(() => {
      this.isAlertVisible = false;
      this.isCelebrationActive = false; // Stop confetti
    }, 3000);
  }

  triggerCelebration() {
    this.isCelebrationActive = true;
    this.confettiArray = Array.from({ length: 50 }, () => ({
      style: {
        top: `-${Math.random() * 20}vh`,
        left: `${Math.random() * 100}vw`,
        background: `hsl(${Math.random() * 360}, 70%, 60%)`,
        '--confetti-color': `hsl(${Math.random() * 360}, 70%, 60%)`,
      },
    }));
  }
  

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(query)
    );
  }

selectOptions(product: Product): void {
  this.router.navigateByUrl('/opinion', { state: { product } });
}

  ngOnInit(): void {
    this.filteredProducts = [...this.products];
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  filterByCategory(category: string): void {
    this.filteredProducts = this.products.filter(product => product.category === category);
    this.currentPage = 1; // Reset to first page
  }
  

  sortProducts(): void {
    if (this.sortOption === 'priceLowToHigh') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'priceHighToLow') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  

  // Pagination methods
  get paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredProducts.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
