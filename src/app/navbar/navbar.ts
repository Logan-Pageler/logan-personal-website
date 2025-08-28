import { Component, HostListener, Input, OnInit } from '@angular/core';

/**
 * Component to represent the navbar at the top of the screen.
 * 
 * @param animated Whether the navbar should be animated and expand when scrolled
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit{
  //whether the navbar should be animated
  @Input() animated: boolean = false;
  // Whether the screen is scrolled
  scrolled = false;

  /**
   * Setup the scrolled on init
   */
  ngOnInit() {
    this.scrolled = !this.animated;
  }

  /**
   * As the window scrolls expand the navbar if animated
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = !this.animated || window.scrollY > 50;
  }
}
