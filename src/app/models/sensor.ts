import { Position } from './position';

export class Sensor {
  id: number;
  humidity: number;
  luminosity: number;
  position: Position;
  proximity: number;
  temperature: number;

  constructor() {
    this.id = 0;
    this.humidity = 0;
    this.luminosity = 0;
    this.position = new Position();
    this.proximity = 0;
    this.temperature = 0;
  }
}
