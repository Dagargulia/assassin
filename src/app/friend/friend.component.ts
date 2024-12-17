import { CommonModule } from '@angular/common';
import { Component, ElementRef,  ViewChild } from '@angular/core';

@Component({
  selector: 'app-friend',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent {
  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
 


}
