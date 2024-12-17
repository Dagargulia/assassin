import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {
  isDarkMode: boolean = false;  

 
  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;  
  }
}
