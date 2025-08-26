import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar";
import { Homepage } from "./homepage/homepage";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = '';
}
