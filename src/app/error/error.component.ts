import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  originalUrl: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Capture the unknown route and display it
    this.originalUrl = this.router.url;

    // Optionally, log it or handle it further
    console.log('Redirected from:', this.originalUrl);
  }
}
