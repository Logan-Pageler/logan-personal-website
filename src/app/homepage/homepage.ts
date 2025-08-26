import { Component } from '@angular/core';
import { Slogan } from "./slogan/slogan";
import { CircuitBackground } from "./circuit-background/circuit-background";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [Slogan, CircuitBackground, CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
