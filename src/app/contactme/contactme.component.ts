import { Component } from '@angular/core';

@Component({
  selector: 'app-contactme',
  standalone: true,
  imports: [],
  templateUrl: './contactme.component.html',
  styleUrl: './contactme.component.css'
})
export class ContactmeComponent {
  isDarkMode: boolean = false;  // Track if dark mode is enabled

  // Method to toggle dark mode
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;  // Toggle the boolean value
  }
}
