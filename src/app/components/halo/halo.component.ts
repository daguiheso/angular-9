import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HaloService } from '../../services/halo.service';
import { HaloVehicle } from '../../others/halo.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-halo',
  templateUrl: './halo.component.html',
  styleUrls: ['./halo.component.scss']
})
export class HaloComponent implements OnInit {

  constructor(private haloService: HaloService) { }

  listVehicles$: Observable<HaloVehicle[]>;

  ngOnInit(): void {
    // this.haloService.getVehicles().subscribe(res => )
    this.getListVehicles();
  }

  async getListVehicles() {
    try {
      this.listVehicles$ = await this.haloService.getVehicles();
    } catch (error) {

    }
  }

  showAlert(name: string) {
    alert(name);
  }

}
