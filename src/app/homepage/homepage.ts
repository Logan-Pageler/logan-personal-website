import { Component } from '@angular/core';
import { Slogan } from "./slogan/slogan";
import { MissionStatement } from './mission-statement/mission-statement';
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";

/**
 * Component for the homepage of my website
 */
@Component({
  selector: 'app-homepage',
  imports: [Slogan, CommonModule, MissionStatement, Navbar],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
