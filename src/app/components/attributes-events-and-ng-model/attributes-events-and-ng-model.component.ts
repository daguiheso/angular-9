import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes-events-and-ng-model',
  templateUrl: './attributes-events-and-ng-model.component.html',
  styleUrls: ['./attributes-events-and-ng-model.component.scss']
})
export class AttributesEventsAndNgModelComponent implements OnInit {

  constructor() { }

  isActive = true;
  name = 'Guillermo';
  apel = 'Hernandez';
  alias = 'daguiheso';
  selectedOption = null;

  ngOnInit(): void {
  }

  toggleIsActive = () => {
    this.isActive = !this.isActive;
  }

  log = (e) => {
    console.log(e);
  }

}
