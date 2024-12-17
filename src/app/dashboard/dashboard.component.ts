import Swal from 'sweetalert2';
import { Games } from '../game';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GameListService } from '../services/game-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class DashboardComponent implements OnInit, OnDestroy {
  games: Games[] = [];
  editMode: boolean = false;
  addMode: boolean = false;
  gameToEdit: Games | null = null;
  newGame: Games = {
    Name: '',
    price: 0,
    buttonA: '',
    buttonB: '',
    coverimg: '',
    id: 0, // Assuming the ID is generated later or assigned by the server
  };
  loginEmail: string = '';
  loginPassword: string = '';
  isAuthenticated: boolean = false;
  isSidebarOpen = false;

  userLocation: any = null;
  cameraStream: any = null;
  videoElement: HTMLVideoElement | null = null;

  cameraVisible = true;
  locationVisible = true;

  constructor(private router: Router, private gameListService: GameListService) {}

  async ngOnInit() {
    await this.fetchGames();
    this.openCameraAndTrackLocation();
    Swal.fire('Navigating to website...', '', 'info');
  }

  async fetchGames() {
    this.games = await this.gameListService.getGame();
  }

  openAddGameModal() {
    this.addMode = true;
    this.newGame = {
      Name: '',
      price: 0,
      buttonA: '',
      buttonB: '',
      coverimg: '',
      id: this.games.length + 1,
    };
  }

  async saveNewGame() {
    const response = await fetch(`${this.gameListService.url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.newGame),
    });

    if (response.ok) {
      Swal.fire('Success!', 'New game added successfully!', 'success');
      this.addMode = false;
      this.newGame = {
        Name: '',
        price: 0,
        buttonA: '',
        buttonB: '',
        coverimg: '',
        id: 0,
      };
      this.fetchGames();
    } else {
      Swal.fire('Error!', 'Failed to add the game.', 'error');
    }
  }

  cancelAdd() {
    this.addMode = false;
    this.newGame = {
      Name: '',
      price: 0,
      buttonA: '',
      buttonB: '',
      coverimg: '',
      id: 0,
    };
  }

  editGame(game: Games) {
    this.editMode = true;
    this.gameToEdit = { ...game };
  }

  async saveGame() {
    if (this.gameToEdit) {
      const response = await fetch(`${this.gameListService.url}/${this.gameToEdit.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.gameToEdit),
      });

      if (response.ok) {
        Swal.fire('Success!', 'Game updated successfully!', 'success');
        this.editMode = false;
        this.gameToEdit = null;
        this.fetchGames();
      } else {
        Swal.fire('Error!', 'Failed to update the game.', 'error');
      }
    }
  }

  cancelEdit() {
    this.editMode = false;
    this.gameToEdit = null;
  }

  async deleteGame(gameId: number) {
    const response = await fetch(`${this.gameListService.url}/${gameId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      Swal.fire('Deleted!', 'Game deleted successfully!', 'success');
      this.fetchGames();
    } else {
      Swal.fire('Error!', 'Failed to delete the game.', 'error');
    }
  }

  confirmDelete(gameId: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteGame(gameId);
      }
    });
    const gameIndex = this.games.findIndex(game => game.id === gameId);
    if (gameIndex > -1) {
      const deletedGame = this.games.splice(gameIndex, 1)[0];
      this.recentlyDeleted.push(deletedGame);
    }
  }
  

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navigateTo(section: string) {
    this.router.navigate([`/${section}`]);
  }

  logout() {
    this.isAuthenticated = false; // Mark the user as not authenticated
    this.router.navigate(['/dashboard']); // Navigate to login page or dashboard
    Swal.fire('Logged out!', 'You have been logged out successfully.', 'info');
  }

  login() {
    if (this.loginEmail === 'Dagaadmin' && this.loginPassword === 'admin') {
      this.isAuthenticated = true;
      this.router.navigate(['/dashboard']); // Navigate to the dashboard after successful login
      Swal.fire('Success!', 'You have logged in successfully.', 'success');
    } else {
      Swal.fire('Error!', 'Invalid credentials. Please try again.', 'error');
    }

    if (!this.userLocation) {
      Swal.fire('Error!', 'Location tracking failed. Please try again.', 'error');
      return;
    }

    Swal.fire('Info', `Location: Latitude: ${this.userLocation.latitude}, Longitude: ${this.userLocation.longitude}`, 'info');
  }

  navigateToWebsite() {
    this.router.navigate(['/']);
  }

  openCameraAndTrackLocation() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.cameraStream = stream;
        this.videoElement = document.querySelector('#live-camera');
        if (this.videoElement) {
          this.videoElement.srcObject = stream;
        }
        Swal.fire('Success!', 'Camera opened successfully.', 'success');
      })
      .catch((err) => {
        Swal.fire('Error!', `Error accessing camera: ${err.message}`, 'error');
      });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        Swal.fire('Location Tracked!', `Latitude: ${this.userLocation.latitude}, Longitude: ${this.userLocation.longitude}`, 'success');
      },
      (error) => {
        Swal.fire('Error!', `Error tracking location: ${error.message}`, 'error');
      }
    );
  }

  toggleCameraVisibility() {
    this.cameraVisible = !this.cameraVisible;
  }

  toggleLocationVisibility() {
    this.locationVisible = !this.locationVisible;
  }

  ngOnDestroy(): void {
    if (this.cameraStream) {
      const tracks = this.cameraStream.getTracks();
      tracks.forEach((track: MediaStreamTrack) => track.stop());
    }
  }
  recentlyDeleted: any[] = [];



restoreGame(deletedGame: any): void {
  this.games.push(deletedGame);
  this.recentlyDeleted = this.recentlyDeleted.filter(game => game.id !== deletedGame.id);
}
}