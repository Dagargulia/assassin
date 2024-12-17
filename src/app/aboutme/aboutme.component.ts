import { Component } from '@angular/core';


@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
  isDarkMode: boolean = false;  // Track if dark mode is enabled

  // Method to toggle dark mode
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;  // Toggle the boolean value
  }
}
