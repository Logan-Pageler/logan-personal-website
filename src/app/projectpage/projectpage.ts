import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { ProjectsList } from "./projects-list/projects-list";

/**
 * Component for the page that will list all my projects
 */
@Component({
  selector: 'app-projectpage',
  imports: [Navbar, ProjectsList],
  templateUrl: './projectpage.html',
  styleUrl: './projectpage.scss'
})
export class Projectpage {

}
