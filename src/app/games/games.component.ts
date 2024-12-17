import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Games } from '../game';
import { GameListService } from '../services/game-list.service';
import { BasketService } from '../services/basket.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  Games: Games[] = [];
  filteredGames: Games[] = [];
  searchText: string = '';
  selectedGames: Set<number> = new Set(); // To track selected games
  gameListService: GameListService = inject(GameListService);
  basketService: BasketService = inject(BasketService);

  constructor() {
    this.gameListService.getGame().then((games: Games[]) => {
      this.Games = games;
      this.filteredGames = games; // Initialize filteredGames with all games
    });
  }

  onSearch() {
    const query = this.searchText.toLowerCase();
    this.filteredGames = this.Games.filter(game =>
      game.Name.toLowerCase().includes(query)
    );
  }

  addToBasket(game: Games) {
    this.basketService.addToBasket(game);
  }

  toggleSelection(gameId: number) {
    if (this.selectedGames.has(gameId)) {
      this.selectedGames.delete(gameId);
    } else {
      this.selectedGames.add(gameId);
    }
  }

  addSelectedToBasket() {
    const selectedGamesArray = this.Games.filter(game =>
      this.selectedGames.has(game.id)
    );
    selectedGamesArray.forEach(game => this.addToBasket(game));
  }
}
