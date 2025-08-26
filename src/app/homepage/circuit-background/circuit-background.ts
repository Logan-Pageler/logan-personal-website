import { Component } from '@angular/core';

@Component({
  selector: 'app-circuit-background',
  templateUrl: './circuit-background.html',
  styleUrls: ['./circuit-background.scss']
})
export class CircuitBackground {
  paths = [
    { "path": "M -100 50 L 400 50 L 400 300 L 700 300 L 700 500 L 1600 500", "delay": 0, "length": 10 },
    { "path": "M 200 -100 L 200 500 L 600 500 L 600 1000", "delay": 5, "length": 10 },
    { "path": "M 1600 250 L 800 250 L 800 450 L 1600 450", "delay": 8, "length": 10 },
    { "path": "M 650 1000 L 650 350 L 350 350 L 350 150 L 1600 150", "delay": 13, "length": 10 },
    { "path": "M 650 -100 L 650 100 L 250 100 L 250 400 L 1600 400", "delay": 16, "length": 10 },
    { "path": "M -100 600 L 500 600 L 500 500 L 200 500 L 200 -100", "delay": 20, "length": 10 },
    { "path": "M -100 540 L 570 540 L 570 300 L 400 300 L 400 -100", "delay": 23, "length": 10 },
  ]

  loop_time = 35
}
