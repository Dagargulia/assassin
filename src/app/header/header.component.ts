import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,NgClass,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  currentRoute: string = '';

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(public authService: AuthService, private router: Router) {}
  logout(): void {
    this.authService.setLoggedIn(false); // Set logged-in state to false
    localStorage.removeItem('userSession'); // Clear session storage
    this.router.navigate(['/login']); // Redirect to login page
  }


  ngOnInit(): void {
    // Listen for route changes
    this.router.events.subscribe(() => {
      const url = this.router.url;
      if (url.includes('tour')) {
        this.currentRoute = 'tour';
      } else if (url.includes('tikets')) {
        this.currentRoute = 'tikets';
      } else {
        this.currentRoute = 'home'; // Default route
      }
    });
  }
  
}
