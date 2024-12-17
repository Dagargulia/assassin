import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-mini',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.css']
})
export class MiniComponent implements OnInit {
  player = { x: 50, y: 50, width: 30, height: 30, health: 100 };
  enemies: { x: number; y: number; width: number; height: number; alive: boolean }[] = [];
  healers: { x: number; y: number; width: number; height: number; active: boolean }[] = [];
  score = 0;
  highScore = 0;
  gameOver = false;
  timeLeft = 60;

  private gameInterval: any;
  private timerInterval: any;

  ngOnInit(): void {
    this.startGame();
  }

  startGame() {
    this.spawnEnemies();
    this.spawnHealers();
    this.gameOver = false;
    this.player.health = 100;
    this.score = 0;
    this.player.x = 50;
    this.player.y = 50;
    this.timeLeft = 60;

    this.gameInterval = setInterval(() => this.gameLoop(), 100);
    this.startTimer();
  }

  restartGame() {
    this.enemies = [];
    this.healers = [];
    clearInterval(this.gameInterval);
    clearInterval(this.timerInterval);
    this.startGame();
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft -= 1;
      } else {
        this.endGame();
      }
    }, 1000);
  }

  endGame() {
    this.gameOver = true;
    clearInterval(this.gameInterval);
    clearInterval(this.timerInterval);

    if (this.score > this.highScore) {
      this.highScore = this.score;
      this.displayAlert(`New High Score: ${this.highScore}`, 'high-score');
    }

    this.displayRank();
    this.displayAlert(`Game Over! Final Score: ${this.score}`, 'game-over');
  }

  displayRank() {
    let rankMessage = '';
    if (this.score >= 20) {
      rankMessage = 'Master Assassin';
    } else if (this.score >= 10) {
      rankMessage = 'Professional Assassin';
    } else if (this.score >= 5) {
      rankMessage = 'Rookie Assassin';
    }
    if (rankMessage) {
      this.displayAlert(`Rank: ${rankMessage}`, 'rank');
    }
  }

  spawnEnemies() {
    for (let i = 0; i < 5; i++) {
      this.enemies.push({
        x: Math.random() * 450,
        y: Math.random() * 450,
        width: 30,
        height: 30,
        alive: true
      });
    }
  }

  spawnHealers() {
    for (let i = 0; i < 3; i++) {
      this.healers.push({
        x: Math.random() * 450,
        y: Math.random() * 450,
        width: 20,
        height: 20,
        active: true
      });
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const step = 10;
    if (!this.gameOver) {
      switch (event.key) {
        case 'w':
        case 'W':
          this.player.y = Math.max(0, this.player.y - step);
          break;
        case 's':
        case 'S':
          this.player.y = Math.min(470, this.player.y + step);
          break;
        case 'a':
        case 'A':
          this.player.x = Math.max(0, this.player.x - step);
          break;
        case 'd':
        case 'D':
          this.player.x = Math.min(470, this.player.x + step);
          break;
        case ' ':
          this.attack();
          break;
        case 'f':
        case 'F':
          this.killEnemy();
          break;
      }
    }
  }

  moveEnemiesTowardsPlayer() {
    const detectionRange = 200;
    this.enemies.forEach((enemy) => {
      if (enemy.alive) {
        const distanceX = this.player.x - enemy.x;
        const distanceY = this.player.y - enemy.y;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < detectionRange) {
          const step = 3;
          if (distanceX !== 0) enemy.x += step * (distanceX / Math.abs(distanceX));
          if (distanceY !== 0) enemy.y += step * (distanceY / Math.abs(distanceY));

          this.checkPlayerCollision(enemy);
        }
      }
    });
  }

  checkPlayerCollision(enemy: { x: number; y: number; width: number; height: number; alive: boolean }) {
    if (
      this.player.x < enemy.x + enemy.width &&
      this.player.x + this.player.width > enemy.x &&
      this.player.y < enemy.y + enemy.height &&
      this.player.y + this.player.height > enemy.y
    ) {
      this.player.health -= 5;
      if (this.player.health <= 0) {
        this.endGame();
      }
    }
  }

  checkHealerCollision() {
    this.healers.forEach((healer) => {
      if (
        healer.active &&
        this.player.x < healer.x + healer.width &&
        this.player.x + this.player.width > healer.x &&
        this.player.y < healer.y + healer.height &&
        this.player.y + this.player.height > healer.y
      ) {
        this.player.health = Math.min(100, this.player.health + 20);
        healer.active = false;
      }
    });
  }

  attack() {
    this.enemies.forEach((enemy) => {
      if (
        enemy.alive &&
        this.player.x < enemy.x + enemy.width &&
        this.player.x + this.player.width > enemy.x &&
        this.player.y < enemy.y + enemy.height &&
        this.player.y + this.player.height > enemy.y
      ) {
        enemy.alive = false;
        this.score += 1;
      }
    });
  }

  killEnemy() {
    const targetEnemy = this.enemies.find(enemy => enemy.alive);
    if (targetEnemy) {
      targetEnemy.alive = false;
      this.score += 1;
    }
  }

  respawnEnemies() {
    this.enemies = this.enemies.filter(enemy => enemy.alive);
    if (this.enemies.length < 5) this.spawnEnemies();
  }

  displayAlert(message: string, alertType: string) {
    alert(`${alertType.toUpperCase()}: ${message}`);
  }

  gameLoop() {
    if (!this.gameOver) {
      this.moveEnemiesTowardsPlayer();
      this.checkHealerCollision();
      this.respawnEnemies();
    }
  }
}
