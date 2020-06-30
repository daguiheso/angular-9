import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
  providers: [UpperCasePipe],
})
export class PipesComponent implements OnInit {
  list = [
    { id: 1, name: 'Cocola', price: 3000 },
    { id: 2, name: 'Pepsi', price: 2800 },
    { id: 3, name: 'Colombiana', price: 2500 },
    { id: 4, name: 'Uva Postobon', price: 2500 },
    { id: 5, name: 'Bigcola', price: 2000 },
    { id: 6, name: 'Cifrut', price: 1800 },
    { id: 7, name: 'Crush', price: 1700 },
    { id: 8, name: 'Te', price: 1700 },
  ];

  constructor(private _upper: UpperCasePipe) {}

  ngOnInit() {
    alert(this._upper.transform(this.list[0].name));
  }
}
