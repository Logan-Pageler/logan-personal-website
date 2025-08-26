import { Component } from '@angular/core';
import { Slogan } from "./slogan/slogan";
import { MissionStatement } from './mission-statement/mission-statement';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [Slogan, CommonModule, MissionStatement],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
