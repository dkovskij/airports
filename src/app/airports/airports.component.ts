import { Component, Input } from '@angular/core';
import { Airport } from '../airport';
import { Aircraft } from '../aircraft';
import { EventBusService } from '../shared/event-bus.service';
import { EventData } from '../shared/event';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent {

  airportCode = '';
  airportTitle = '';
  airportAddress = '';
  noText = true;
  selectedId: number;

  @Input() airports: Airport[];
  @Input() aircrafts: Aircraft[];

  constructor(private eventBusService: EventBusService) { }

  genId(): number {
    return this.airports.length > 0 ? this.airports[this.airports.length - 1].id + 1 : 1;
  }

  validInput() {
    if (!this.airportCode || !this.airportTitle || !this.airportAddress) {
      this.noText = true;
    } else {
      this.noText = false;
    }
  }

  addAirport() {
    if (this.noText) {
      return;
    } else {
      const airport: Airport = {
        id: this.genId(),
        code: this.airportCode,
        title: this.airportTitle,
        address: this.airportAddress,
      };

      this.eventBusService.emit(new EventData('addAirport', airport));

      this.airportCode = '';
      this.airportTitle = '';
      this.airportAddress = '';
      this.noText = true;
    }

  }

  delete(airport: Airport): void {
    this.eventBusService.emit(new EventData('deleteAirport', airport));
  }

  edit(airport: Airport) {
    if (this.selectedId) {
      this.eventBusService.emit(new EventData('updateAirport', airport));
      this.selectedId = 0;
      return;
    }
    this.selectedId = airport.id;
  }
}
