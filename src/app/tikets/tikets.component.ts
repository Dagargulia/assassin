import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { MyTicketsService } from '../mytickets.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket',
  templateUrl: './tikets.component.html',
  styleUrls: ['./tikets.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule,NgFor], 
   // Add FormsModule here
})
export class TiketsComponent {
  selectedTransports: { [key: string]: string } = {};
  selectedDate: { [key: string]: string } = {};
  selectedTime: { [key: string]: string } = {};
  selectedSeat: string | null = null;
  showModal: boolean = false;
  modalTiket: any | null = null;
  menuOpen: boolean = false;
  

  // Search term for filtering tickets
  searchTerm: string = '';

  constructor(private myTicketsService: MyTicketsService) {}


  tikets = [
    {
      location: 'Florence, Italy',
      imageUrl: 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQUSilX85FIaFroVaNTyOUfx7XJh0-3jAvHVDmo62QL3ViJouZBhDXsjPRA68-QnL927xsB2JPMJhNzXCoXLl5v6lp73-l4syjgZPS_Fw',
      description: 'Explore the breathtaking Renaissance city of Florence in Assassin\'s Creed II.',
      information: 'Florence is home to iconic landmarks such as the Duomo, Ponte Vecchio, and Palazzo Medici.',
      transportPrices: {
        bus: 30,
        plane: 150,
        train: 60,
      }  
    },
    
      {
        location: 'Venice, Italy',
        imageUrl: 'https://media.cntraveller.com/photos/665ee92a9421aab48dea082c/16:9/w_2560%2Cc_limit/venice-GettyImages-941234062.jpeg',
        description: 'Discover the canals and history of Venice in Assassin\'s Creed II.',
        information: 'Venice is known for its unique canals, St. Mark\'s Basilica, and the Rialto Bridge.',
        transportPrices: {
          bus: 20,
          plane: 200,
          train: 80,
        }
      },
      {
        location: 'Cairo, Egypt',
        imageUrl: 'https://media.licdn.com/dms/image/D4E12AQFlclqYasyNmQ/article-cover_image-shrink_720_1280/0/1706392480853?e=2147483647&v=beta&t=zEaduWHMN2aGXcwgC0ZUI21FNd_4qfZEa1JSOBCKQ9k',
        description: 'Explore the Egyptian pyramids and ancient landmarks in Assassin\'s Creed Origins.',
        information: 'Cairo is home to the iconic Great Pyramid of Giza and the Sphinx.',
        transportPrices: {
          bus: 15,
          plane: 250,
          train: 100,
        }
      },
      {
        location: 'Paris, France',
        imageUrl: 'https://paristickets.tours/wp-content/uploads/2022/09/paris-at-spring.jpg',
        description: 'Visit the iconic Notre-Dame Cathedral, Eiffel Tower, and more in Assassin\'s Creed Unity.',
        information: 'Paris is known for its stunning architecture, rich history, and landmarks.',
        transportPrices: {
          bus: 25,
          plane: 175,
          train: 70,
        }
      },
      {
        location: 'London, England',
        imageUrl: 'https://www.fodors.com/wp-content/uploads/2022/08/shutterstock_457198984.jpg',
        description: 'Experience Victorian London and its mysteries in Assassin\'s Creed Syndicate.',
        information: 'London is famous for its landmarks like Big Ben, Buckingham Palace, and Tower Bridge.',
        transportPrices: {
          bus: 18,
          plane: 180,
          train: 90,
        }
      },
      {
        location: 'New York City, USA',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1661954654458-c673671d4a08?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9yayUyMGNpdHl8ZW58MHx8MHx8fDA%3D',
        description: 'Uncover the secrets of the American Revolution in Assassin\'s Creed III.',
        information: 'New York City is a bustling metropolis known for landmarks like the Statue of Liberty and Central Park.',
        transportPrices: {
          bus: 30,
          plane: 350,
          train: 120,
        }
      },
      {
        location: 'Constantinople, Turkey',
        imageUrl: 'https://visitistanbulofficial.com/wp-content/uploads/2023/04/When-Did-Constantinople-Become-Istanbul.jpeg',
        description: 'Visit the Byzantine Empire and ancient sites in Assassin\'s Creed: Revelations.',
        information: 'Constantinople (now Istanbul) is home to iconic landmarks like the Hagia Sophia and the Blue Mosque.',
        transportPrices: {
          bus: 35,
          plane: 220,
          train: 110,
        }
      },
      {
        location: 'Rome, Italy',
        imageUrl: 'https://cbx-prod.b-cdn.net/COLOURBOX62898913.jpg?width=800&height=800&quality=70',
        description: 'Step into the ancient world of Rome in Assassin\'s Creed Brotherhood.',
        information: 'Rome boasts historical landmarks like the Colosseum, Roman Forum, and the Pantheon.',
        transportPrices: {
          bus: 28,
          plane: 160,
          train: 85,
        }
      },
      {
        location: 'Moscow, Russia',
        imageUrl: 'https://content.r9cdn.net/rimg/dimg/b0/1c/7746c81c-city-14713-163f5192361.jpg?width=1366&height=768&xhint=1535&yhint=594&crop=true',
        description: 'Venture into the heart of Russia and its history in Assassin\'s Creed Chronicles.',
        information: 'Moscow is known for the Kremlin, Red Square, and its vast cultural heritage.',
        transportPrices: {
          bus: 20,
          plane: 300,
          train: 130,
        }
      },
      {
        location: 'Dublin, Ireland',
        imageUrl: 'https://img.static-kl.com/images/media/CEB5D191-D488-4DE2-B9C84846ED06D515',
        description: 'Explore the Irish countryside and its hidden secrets in Assassin\'s Creed Odyssey.',
        information: 'Dublin is famous for its historical landmarks, such as Trinity College and Dublin Castle.',
        transportPrices: {
          bus: 18,
          plane: 250,
          train: 95,
        }
      },
      {
        location: 'Jerusalem, Israel',
        imageUrl: 'https://img.freepik.com/premium-photo/western-wall-dome-rock-jerusalem-israel-with-beautiful-sunset_887552-31901.jpg',
        description: 'Unravel the secrets of the Holy Land in Assassin\'s Creed.',
        information: 'Jerusalem is known for its spiritual significance and landmarks like the Western Wall and Dome of the Rock.',
        transportPrices: {
          bus: 22,
          plane: 280,
          train: 110,
        }
      
    },
    // Add more tickets with similar structure
  ];

  
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  filteredTickets() {
    return this.tikets.filter(tiket => 
      tiket.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  // Get price for the selected transport
  getPrice(tiket: any, transport: string): number {
    return tiket.transportPrices[transport] || 0;
  }

  // Update transport type
  updateTransport(tiket: any, transport: string): void {
    this.selectedTransports[tiket.location] = transport;
  }

  // Update date and time
  updateDateTime(tiket: any, value: string): void {
    if (this.selectedDate[tiket.location] && this.selectedTime[tiket.location]) {
      console.log(
        `Updated date/time for ${tiket.location}: ${this.selectedDate[tiket.location]} at ${this.selectedTime[tiket.location]}`
      );
    }
  }

  // Open modal to buy a ticket
  buyTicket(tiket: any): void {
    this.modalTiket = tiket;
    this.showModal = true;
    this.selectedSeat = null; // Reset seat selection
  }

  // Close modal
  closeModal(): void {
    this.showModal = false;
    this.modalTiket = null;
  }

  // Confirm the purchase of a ticket
  confirmPurchase(): void {
    // Validate inputs
    if (
      !this.selectedTransports[this.modalTiket?.location] ||
      !this.selectedDate[this.modalTiket?.location] ||
      !this.selectedTime[this.modalTiket?.location] ||
      !this.selectedSeat
    ) {
      alert('Please complete all selections before confirming your purchase.');
      return;
    }
  
    // Prepare ticket data
    const newTicket = {
      location: this.modalTiket?.location,
      imageUrl: this.modalTiket?.imageUrl,
      price: this.getPrice(
        this.modalTiket,
        this.selectedTransports[this.modalTiket.location]
      ),
      transport: this.selectedTransports[this.modalTiket.location],
      date: this.selectedDate[this.modalTiket.location],
      time: this.selectedTime[this.modalTiket.location],
      seat: this.selectedSeat,
    };
  
    // Add ticket to MyTicketsService
    this.myTicketsService.addTicket(newTicket);
  
    // Display styled alert with rich information
    const ticketMessage = `
    <div style="text-align: left;">
      🎟️ <strong>Ticket for ${newTicket.location} successfully added to My Tickets!</strong><br><br>
  
      ✈️ <strong>Transport</strong>: ${newTicket.transport}<br>
      💺 <strong>Seat</strong>: ${newTicket.seat}<br>
      🏷️ <strong>Price</strong>: $${newTicket.price}<br>
      📅 <strong>Date</strong>: ${newTicket.date}<br>
      ⏰ <strong>Time</strong>: ${newTicket.time}<br><br>
  
      📝 <strong>Description</strong>:<br>
      Get ready for an unforgettable adventure in ${newTicket.location}. Thank you for booking your ticket!<br><br>
  
      Your journey to ${newTicket.location} is confirmed!
    </div>
  `;
  
  // Use SweetAlert2 to display the message
  Swal.fire({
    title: 'Ticket Added!',
    html: ticketMessage, // Pass the HTML string as the content
    icon: 'success', // Set the icon to success
    confirmButtonText: 'OK',
    customClass: {
      popup: 'swal2-wide-popup', // Optional: Custom styling for wider layout
    }
  });
  
   
    // Close modal
    this.closeModal();
  }
  


}
  

