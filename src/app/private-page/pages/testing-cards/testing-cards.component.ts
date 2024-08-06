import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing-cards',
  templateUrl: './testing-cards.component.html',
  styleUrls: ['./testing-cards.component.scss']
})
export class TestingCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orange = 'orange';
  red = 'red';
  blue = 'blue';
  green = 'green';
  yellow = 'yellow';
  brown = 'brown';

}
