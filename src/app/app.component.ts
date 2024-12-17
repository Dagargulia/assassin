import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assassin';
  showHeader: boolean = true;
  showFooter: boolean = true;

  constructor(private router: Router) {
    // Listen for navigation events
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Define the routes where the header and footer should not be displayed
        const hiddenRoutes = ['dashboard', 'error', '**']; // Add '**' for wildcard routes

        // Check if the current route matches any of the hidden routes
        const hideHeaderFooter = hiddenRoutes.some((route) =>
          event.urlAfterRedirects.includes(route)
        );

        // Toggle the visibility of header and footer
        if (hideHeaderFooter || event.urlAfterRedirects === '/404') {
          this.showHeader = false;
          this.showFooter = false;
        } else {
          this.showHeader = true;
          this.showFooter = true;
        }
      });
  }
}
