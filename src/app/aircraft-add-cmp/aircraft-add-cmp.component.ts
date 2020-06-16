import { Component, Input } from '@angular/core';
import { Aircraft } from '../aircraft';
import { EventBusService } from '../shared/event-bus.service';
import { EventData } from '../shared/event';

@Component({
  selector: 'app-aircraft-add-cmp',
  templateUrl: './aircraft-add-cmp.component.html',
  styleUrls: ['./aircraft-add-cmp.component.scss']
})
export class AircraftAddCmpComponent {

  aircraftCode = '';
  noText = true;
  aircraftType = '';
  aircraftNum = '';
  aircraftMan = '';
  aircraftModel = '';
  aircraftAirport = '';

  @Input() aircrafts: Aircraft[];

  constructor(private eventBusService: EventBusService) { }

  genId(length: number): number {
    return length > 0 ? this.aircrafts[length - 1].id + 1 : 1;
  }

  validInput() {
    if (!this.aircraftCode || !this.aircraftType
      || !this.aircraftNum || !this.aircraftMan
      || !this.aircraftModel || !this.aircraftAirport) {
      this.noText = true;
    } else {
      this.noText = false;
    }
  }

  addAircraft() {
    if (!this.aircraftCode ||
      !this.aircraftCode ||
      !this.aircraftType ||
      !this.aircraftNum ||
      !this.aircraftMan ||
      !this.aircraftModel) {
      return;
    } else {
      const aircraft: Aircraft = {
        id: this.genId(this.aircrafts.length),
        code: this.aircraftCode,
        type: this.aircraftType,
        num: this.aircraftNum,
        man: this.aircraftMan,
        model: this.aircraftModel,
        airport: this.aircraftAirport
      };

      this.eventBusService.emit(new EventData('addAircraft', aircraft));

      this.aircraftCode = '';
      this.aircraftType = '';
      this.aircraftNum = '';
      this.aircraftMan = '';
      this.aircraftModel = '';
      this.aircraftAirport = '';
      this.noText = true;
    }
  }
}
