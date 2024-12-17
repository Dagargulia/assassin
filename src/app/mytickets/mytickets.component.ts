// mytickets.component.ts
import { Component, OnInit } from '@angular/core';
import { MyTicketsService } from '../mytickets.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MyTicketsComponent implements OnInit {
  myTickets: any[] = [];

  constructor(private myTicketsService: MyTicketsService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {
    this.myTickets = this.myTicketsService.getTickets();
  }
  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
