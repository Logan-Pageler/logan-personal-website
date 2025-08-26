import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.html',
  styleUrls: ['./slogan.scss'],
  imports: [ CommonModule ]
})
export class Slogan implements OnInit {
  buzzWords = ['Secure', 'Scalable', 'Fast', 'Reliable', 'Composable', 'Flexible'];
  currentWordIndex = 0;

  currentText$ = new BehaviorSubject<string>('');
  private isDeleting = false;
  private displayText = '';
  private typingSpeed = 100;
  private pauseTime = 2400;

  ngOnInit() {
    this.typeNextChar();
  }

  private typeNextChar() {
    const fullText = this.buzzWords[this.currentWordIndex];

    if (!this.isDeleting) {
      this.displayText = fullText.substring(0, this.displayText.length + 1);
    } else {
      this.displayText = fullText.substring(0, this.displayText.length - 1);
    }

    this.currentText$.next(this.displayText);

    let delay = this.typingSpeed;

    if (!this.isDeleting && this.displayText === fullText) {
      delay = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.buzzWords.length;
      delay = 500;
    }

    setTimeout(() => this.typeNextChar(), delay);
  }
}
