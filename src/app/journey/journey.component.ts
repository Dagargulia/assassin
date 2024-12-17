import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements AfterViewInit {
  @ViewChild('journey', { static: true }) journey!: ElementRef;
  itemCount = 5; // Total number of items
  currentIndex = 0; // Current item index

  ngAfterViewInit(): void {
    this.scrollToIndex(this.currentIndex); // Initialize at the first item
  }

  scrollJourney(direction: number): void {
    const journey = this.journey.nativeElement;
    this.currentIndex += direction;

    // Loop back to the first item if out of bounds
    if (this.currentIndex >= this.itemCount) {
      this.currentIndex = 0;
    } else if (this.currentIndex < 0) {
      this.currentIndex = this.itemCount - 1;
    }

    this.scrollToIndex(this.currentIndex);
  }

  scrollToIndex(index: number): void {
    const journey = this.journey.nativeElement;
    const itemWidth = journey.offsetWidth;
    journey.scrollTo({
      left: index * itemWidth,
      behavior: 'smooth'
    });
  }
  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
