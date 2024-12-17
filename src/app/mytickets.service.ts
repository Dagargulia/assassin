// mytickets.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyTicketsService {
  private tickets: any[] = [];

  addTicket(ticket: any): void {
    this.tickets.push(ticket);
    console.log('Ticket added:', ticket); // Check if the ticket is being added correctly
  }

  getTickets(): any[] {
    return this.tickets;
  }
}
