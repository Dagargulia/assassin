import { Injectable } from '@angular/core';
import { Games } from '../game';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor() { }


  url='https://66ffa6ca4da5bd2375516578.mockapi.io/Game'

  async getGame(): Promise<Games[]>{
    const response = await fetch(this.url)
    return response.json()
  }


  async deleteGame(gameId: number): Promise<void> {
    const response = await fetch(`${this.url}/${gameId}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Failed to delete game.');
    }
  }
  
  async updateGame(game: Games): Promise<Games> {
    const response = await fetch(`${this.url}/${game.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(game),
    });
    if (!response.ok) {
      throw new Error('Failed to update game.');
    }
    return response.json();
  }
  

}
