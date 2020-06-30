import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { HaloVehicle } from '../../others/halo.interfaces';

@Component({
  selector: 'app-halo-vehicles',
  templateUrl: './halo-vehicles.component.html',
  styleUrls: ['./halo-vehicles.component.scss']
})
export class HaloVehiclesComponent implements OnInit {

  constructor() { }

  @Input() data: HaloVehicle[];
  @Output() selectedVehicle: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  selectVehicle(name) {
    this.selectedVehicle.emit(name);
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.data) {
  //     debugger;
  //   }
  // }

}
