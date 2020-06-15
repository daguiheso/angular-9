import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  counter = 0;
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit(): void {
  }

  addCounter() {
    this.numbers.push(1);
  }

}
