import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HaloVehicle } from '../others/halo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HaloService {

  constructor(private httpClient: HttpClient) {}

  getVehicles(): Observable<HaloVehicle[]> {
    return this.httpClient.get<HaloVehicle[]>(`${environment.haloApiBaseurl}/metadata/h5/metadata/vehicles`, {
      headers: {
        'Ocp-Apim-Subscription-Key': '03a7549abbb848f59cc476b3a8d35f1b',
    }});
  }
}
