import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OpeningDirective } from '../directives/opening.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,OpeningDirective,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
