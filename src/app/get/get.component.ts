import { NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-get',
  standalone: true,
  imports: [NgIf,],
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent {
  showDownloadAlert = false;

  downloadFile() {
    this.showDownloadAlert = true; // Show the alert when downloading starts

    // Simulate a download process (e.g., 3 seconds)
    setTimeout(() => {
      this.showDownloadAlert = false; // Hide alert after download simulation
      alert('Download completed!'); // Notify user after completion
    }, 3000); // Change time as necessary
  }
}
