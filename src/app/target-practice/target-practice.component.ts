import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-target-practice',
  templateUrl: './target-practice.component.html',
  styleUrls: ['./target-practice.component.css'],
  standalone: true,
  imports: [CommonModule,],
})
export class TargetPracticeComponent implements OnInit {
  score: number = 0;
  timeLeft: number = 30; // 30-second timer
  targets: { x: number, y: number, visible: boolean }[] = [];
  interval: any;

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.score = 0;
    this.timeLeft = 30;
    this.targets = Array.from({ length: 5 }, () => ({
      x: Math.random() * 90,
      y: Math.random() * 90,
      visible: true
    }));
    this.interval = setInterval(() => this.updateGame(), 1000);
  }

  updateGame() {
    if (this.timeLeft > 0) {
      this.timeLeft--;
      // Move each target to a new random position
      this.targets.forEach(target => {
        target.x = Math.random() * 90;
        target.y = Math.random() * 90;
        target.visible = true;
      });
    } else {
      clearInterval(this.interval);
      alert(`Game Over! Your score is ${this.score}`);
    }
  }

  hitTarget(index: number) {
    if (this.targets[index].visible) {
      this.targets[index].visible = false;
      this.score += 10;
    }
  }
}
