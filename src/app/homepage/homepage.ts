import { Component } from '@angular/core';
import { Slogan } from "./slogan/slogan";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [Slogan, CommonModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss'
})
export class Homepage {

}
