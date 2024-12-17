import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  assassins = [
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/ac1.jpg',
      name: 'Altaïr Ibn-La\'Ahad',
      description: 'Assassin\'s Creed (2007)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/ac2.jpg',
      name: 'Ezio Auditore da Firenze',
      description: 'Assassin\'s Creed II (2009)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/acb.jpg',
      name: 'Ezio Auditore da Firenze',
      description: 'Assassin\'s Creed Brotherhood (2010)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/acr.jpg',
      name: 'Ezio Auditore da Firenze',
      description: 'Assassin\'s Creed Revelations (2011)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/ac3.jpg',
      name: 'Connor (Ratonhnhaké:ton)',
      description: 'Assassin\'s Creed III (2012)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/acbf.jpg',
      name: 'Edward Kenway',
      description: 'Assassin\'s Creed IV (2013)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/acro.jpg',
      name: 'Shay Patrick Cormac',
      description: 'Assassin\'s Creed Rogue (2014)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/acu.jpg',
      name: 'Arno Victor Dorian',
      description: 'Assassin\'s Creed Unity (2014)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/acs-1.jpg',
      name: 'Jacob and Evie Frye',
      description: 'Assassin\'s Creed Syndicate (2015)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/aco.jpg',
      name: 'Bayek of Siwa',
      description: 'Assassin\'s Creed Origins (2017)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2022/09/acod.jpg',
      name: 'Kassandra',
      description: 'Assassin\'s Creed Odyssey (2018)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2021/12/ack.jpg',
      name: 'Eivor',
      description: 'Assassin\'s Creed Valhalla (2020)'
    },
    {
      img: 'https://assassinscreedsymphonicadventure.com/wp-content/uploads/2024/06/acm.jpg',
      name: 'Basim Ibn Ishaq',
      description: 'Assassin\'s Creed Mirage (2023)'
    },
  ];
}