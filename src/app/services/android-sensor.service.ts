import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sensor } from '../models/sensor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AndroidSensorService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://android-sensor-api.herokuapp.com/api/v1/sensor/';

  getSensors(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.baseUrl).pipe(map(
      result => result
    ));
  }
}
