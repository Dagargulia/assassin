import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {
  isDarkMode: boolean = false;  // Track if dark mode is enabled
  trackingCode: string = '';  // To hold the tracking code input
  trackingDetails: string = '';  // To hold the tracking information
  isLoading: boolean = false;  // To show loading spinner when tracking

  // Fake product details to display in the result
  productName = "Wireless Headphones";
  region = "North America";
  state = "California";
  location = "San Francisco, CA";
  status = "Shipped";
  estimatedDelivery = "2024-11-20";

  // Method to toggle dark mode
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;  // Toggle dark mode state
  }

  // Method to trigger tracking action
  onTrack(): void {
    if (!this.trackingCode) {
      alert('Please enter a tracking code');
      return;
    }

    this.isLoading = true;  // Set loading to true
    this.trackingDetails = ''; // Clear previous tracking details

    // Simulate an API call to fetch tracking details
    setTimeout(() => {
      this.isLoading = false;  // Stop loading spinner
      // Update tracking details with fake data
      this.trackingDetails = `Tracking details for code ${this.trackingCode}: Package is in transit.`;
    }, 2000);
  }
}
