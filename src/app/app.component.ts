import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AndroidSensorService } from './services/android-sensor.service';
import { Sensor } from './models/sensor';

import { interval } from 'rxjs/internal/observable/interval';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'android-sensor-dashboard';

  sensors: Sensor[];
  loading = true;

  constructor(private service: AndroidSensorService) {
  }

  ngOnInit() {
    interval(5000).pipe(startWith(0), switchMap(() => this.service.getSensors())).subscribe(result => {
      console.log(result);
      this.sensors = result;
      this.loading = false;
    });
  }
}
