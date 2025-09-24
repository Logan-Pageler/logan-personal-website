import { Component, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subscription } from 'rxjs';

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
  // Whether the menu is open
  isOpen = false;
  // Subscription to router events
  private sub: Subscription;

  // Links to display in the navbar
  links = [
    { label: 'Home', path: '' },
    { label: 'Projects', path: 'projects' },
    { label: 'Contact', path: 'mailto:me@loganpageler.com' },
  ];

  /**
   * Connect to the router to listen for navigation events
   * @param router The router to listen for navigation events
   */
  constructor(router: Router) {
    // Close the menu after navigation
    this.sub = router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => (this.isOpen = false));
  }

  /**
   * Toggle the menu open or closed
   */
  toggleMenu() { this.isOpen = !this.isOpen; }

  /**
   * Close the menu
   */
  closeMenu()  { this.isOpen = false; }

  /**
   * Listen for escape key to close the menu
   */
  @HostListener('window:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this.isOpen) this.closeMenu();
  }

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

  /**
   * Cleanup the subscription
   */
  ngOnDestroy() { this.sub?.unsubscribe(); }
}
