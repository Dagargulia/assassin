import { Component } from '@angular/core';


@Component({
  selector: 'app-return',
  standalone: true,
  imports: [],
  templateUrl: './return.component.html',
  styleUrl: './return.component.css'
})
export class ReturnComponent {
  isDarkMode: boolean = false;  // Track if dark mode is enabled

  // Method to toggle dark mode
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;  // Toggle the boolean value
  }
}
