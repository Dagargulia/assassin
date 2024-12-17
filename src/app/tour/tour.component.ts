import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
})
export class TourComponent {
  events = [
    {
      img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
      day: '6',
      month: 'April',
      year: '2025',
      location: 'Montreal, Canada',
      venue: 'Salle Wilfrid-Pelletier',
      time: '20:00',
      presenter: 'Presented by Overlook Events'
    },
    {
      img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
      day: '10',
      month: 'April',
      year: '2025',
      location: 'Toronto, Canada',
      venue: 'Meridian Hall',
      time: '20:00',
      presenter: 'Presented by Overlook Events'
    },
    {
      img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
      day: '3',
      month: 'May',
      year: '2025',
      location: 'Luzern, Switzerland',
      venue: 'Konzerthaus',
      time: '19:30',
      presenter: 'Presented by Overlook Events'
    },
    
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '15',
        month: 'May',
        year: '2025',
        location: 'Paris, France',
        venue: 'Le Grand Rex',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '20',
        month: 'June',
        year: '2025',
        location: 'Berlin, Germany',
        venue: 'Tempodrom',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '5',
        month: 'July',
        year: '2025',
        location: 'New York, USA',
        venue: 'Carnegie Hall',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '18',
        month: 'August',
        year: '2025',
        location: 'London, UK',
        venue: 'Royal Albert Hall',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '25',
        month: 'September',
        year: '2025',
        location: 'Sydney, Australia',
        venue: 'Sydney Opera House',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '12',
        month: 'October',
        year: '2025',
        location: 'Madrid, Spain',
        venue: 'WiZink Center',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '7',
        month: 'November',
        year: '2025',
        location: 'Rome, Italy',
        venue: 'Palalottomatica',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '15',
        month: 'November',
        year: '2025',
        location: 'Barcelona, Spain',
        venue: 'Palau Sant Jordi',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '28',
        month: 'November',
        year: '2025',
        location: 'Berlin, Germany',
        venue: 'Mercedes-Benz Arena',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '2',
        month: 'December',
        year: '2025',
        location: 'Vienna, Austria',
        venue: 'Wiener Stadthalle',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '10',
        month: 'December',
        year: '2025',
        location: 'Zurich, Switzerland',
        venue: 'Hallenstadion',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '17',
        month: 'December',
        year: '2025',
        location: 'Copenhagen, Denmark',
        venue: 'Royal Arena',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '5',
        month: 'January',
        year: '2026',
        location: 'Los Angeles, USA',
        venue: 'Hollywood Bowl',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '12',
        month: 'January',
        year: '2026',
        location: 'San Francisco, USA',
        venue: 'Bill Graham Civic Auditorium',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '22',
        month: 'February',
        year: '2026',
        location: 'Mexico City, Mexico',
        venue: 'Auditorio Nacional',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '5',
        month: 'March',
        year: '2026',
        location: 'Buenos Aires, Argentina',
        venue: 'Luna Park',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '18',
        month: 'March',
        year: '2026',
        location: 'Sao Paulo, Brazil',
        venue: 'Allianz Parque',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '1',
        month: 'April',
        year: '2026',
        location: 'Lima, Peru',
        venue: 'Jockey Club del Peru',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '20',
        month: 'April',
        year: '2026',
        location: 'Rio de Janeiro, Brazil',
        venue: 'Maracanã Stadium',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '15',
        month: 'May',
        year: '2026',
        location: 'Cape Town, South Africa',
        venue: 'Cape Town International Convention Centre',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '30',
        month: 'May',
        year: '2026',
        location: 'Tokyo, Japan',
        venue: 'Nippon Budokan',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '10',
        month: 'June',
        year: '2026',
        location: 'Seoul, South Korea',
        venue: 'Olympic Gymnastics Arena',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '25',
        month: 'June',
        year: '2026',
        location: 'Shanghai, China',
        venue: 'Mercedes-Benz Arena',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '12',
        month: 'July',
        year: '2026',
        location: 'Mumbai, India',
        venue: 'Jio World Centre',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '5',
        month: 'August',
        year: '2026',
        location: 'Dubai, UAE',
        venue: 'Coca-Cola Arena',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '20',
        month: 'August',
        year: '2026',
        location: 'Istanbul, Turkey',
        venue: 'Volkswagen Arena',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '1',
        month: 'September',
        year: '2026',
        location: 'Singapore, Singapore',
        venue: 'The Star Theatre',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '15',
        month: 'September',
        year: '2026',
        location: 'Bangkok, Thailand',
        venue: 'Impact Arena',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '30',
        month: 'September',
        year: '2026',
        location: 'Jakarta, Indonesia',
        venue: 'Istora Senayan',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '10',
        month: 'October',
        year: '2026',
        location: 'Manila, Philippines',
        venue: 'Mall of Asia Arena',
        time: '20:00',
        presenter: 'Presented by Overlook Events'
      },
      {
        img: 'https://overlook-events.com/wp-content/uploads/2022/12/acsann.jpg',
        day: '25',
        month: 'October',
        year: '2026',
        location: 'Kuala Lumpur, Malaysia',
        venue: 'Axiata Arena',
        time: '19:30',
        presenter: 'Presented by Overlook Events'
      }
      
    // Add other events as shown in your data...
  ];

  filteredEvents = [...this.events];
  selectedDate: string = '';
  selectedTime: string = '';
  selectedEvent: any = null;
  availableSeats: any[] = [];
  selectedSeats: any[] = [];
  ticketDetails: any = null;

  showDetails(event: any) {
    this.selectedEvent = event;
    this.availableSeats = this.generateSeats(); // Generate seats when event is selected
    this.selectedSeats = [];
    this.ticketDetails = null; // Reset ticket details
  }

  closeDetails() {
    this.selectedEvent = null;
    this.availableSeats = [];
    this.selectedSeats = [];
  }

  filterEvents() {
    this.filteredEvents = this.events.filter((event) => {
      const eventDate = new Date(`${event.month} ${event.day}, ${event.year}`);
      const selectedDate = this.selectedDate ? new Date(this.selectedDate) : null;
      const selectedTime = this.selectedTime ? this.selectedTime : null;

      let dateMatch = true;
      let timeMatch = true;

      if (selectedDate) {
        dateMatch = eventDate.toDateString() === selectedDate.toDateString();
      }

      if (selectedTime) {
        timeMatch = event.time === selectedTime;
      }

      return dateMatch && timeMatch;
    });
  }

  resetFilter() {
    this.selectedDate = '';
    this.selectedTime = '';
    this.filteredEvents = [...this.events];
  }

  generateSeats() {
    const rows = 5; // Number of rows
    const cols = 8; // Number of seats per row
    const vipRows = [1, 2]; // Define which rows are VIP
    const seats = [];
  
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        seats.push({
          row: i,
          col: j,
          price: vipRows.includes(i) ? Math.floor(50 + Math.random() * 100) : Math.floor(10 + Math.random() * 50), // Higher price for VIP rows
          selected: false,
          isVip: vipRows.includes(i), // Mark VIP seats
        });
      }
    }
  
    return seats;
  }

  toggleSeatSelection(seat: any) {
    if (seat.selected) {
      // Unselect seat
      seat.selected = false;
      this.selectedSeats = this.selectedSeats.filter(
        (s) => s.row !== seat.row || s.col !== seat.col
      );
    } else {
      // Select seat
      seat.selected = true;
      this.selectedSeats.push(seat);
    }
  }
  isAlertVisible: boolean = false;

  submitSelection() {
    if (this.selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }
  
    // Generate ticket details
    this.ticketDetails = {
      event: this.selectedEvent,
      seats: this.selectedSeats,
      totalPrice: this.selectedSeats.reduce((total, seat) => total + seat.price, 0),
    };
  
    // Show the custom alert
    this.isAlertVisible = true;
  }
  ilteredEvents = []; // To display a subset of events
  itemsToShow = 4; // Number of events to show initially

  ngOnInit(): void {
    this.filteredEvents = this.events.slice(0, this.itemsToShow);
  }

  loadMore(): void {
    const newItemsCount = this.filteredEvents.length + this.itemsToShow;
    this.filteredEvents = this.events.slice(0, newItemsCount);
  }
}

