import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Component for the slogan on my homepage
 */
@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.html',
  styleUrls: ['./slogan.scss'],
  imports: [ CommonModule ]
})
export class Slogan implements OnInit {
  /**
   * List of buzzwords that gets cycled
   */
  buzzWords = ['Secure', 'Scalable', 'Fast', 'Reliable', 'Composable', 'Flexible'];
  /**
   * Which word index is currently selected
   */
  currentWordIndex = 0;
  /**
   * Current text to be rendered
   */
  currentText$ = new BehaviorSubject<string>('');

  /**
   * Whether the slogan is in the deleting animation
   */
  private isDeleting = false;
  /**
   * What text is being displayed
   */
  private displayText = '';
  /**
   * Speed of typing the word in milliseconds per character
   */
  private typingSpeed = 100;
  /**
   * Length of pause before deleting word in milliseconds
   */
  private deletePauseTime = 2400;
  /**
   * Length of pause before typing a word in milliseconds
   */
  private writePauseTime = 500;

  /**
   * Start the typing animation on init
   */
  ngOnInit() {
    this.typeNextChar();
  }

  /**
   * Run one cycle of the typing animation
   */
  private typeNextChar() {
    const fullText = this.buzzWords[this.currentWordIndex];

    // if we are deleting, remove a letter, otherwise add one
    if (!this.isDeleting) {
      this.displayText = fullText.substring(0, this.displayText.length + 1);
    } else {
      this.displayText = fullText.substring(0, this.displayText.length - 1);
    }

    // update the current text render
    this.currentText$.next(this.displayText);

    // the default of the delay is our typing speed
    let delay = this.typingSpeed;

    // change our delay if we finished typing/deleting
    if (!this.isDeleting && this.displayText === fullText) {
      delay = this.deletePauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.buzzWords.length;
      delay = this.writePauseTime;
    }

    setTimeout(() => this.typeNextChar(), delay);
  }
}
