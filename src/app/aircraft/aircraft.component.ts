import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Aircraft } from '../aircraft';
import { AircraftService } from '../shared/aircraft.service';
import { EventBusService } from '../shared/event-bus.service';
import { EventData } from '../shared/event';


@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.scss']
})
export class AircraftComponent {
  selectedID: number;

  @Input() aircrafts: Aircraft[];

  @Output() reloadAirport = new EventEmitter();
  @Output() onDeleteAircraft = new EventEmitter();

  constructor(private aircraftService: AircraftService,
              private eventBusService: EventBusService) {
  }

  getAircrafts() {
    this.reloadAirport.emit();
  }

  onEdit(id) {
    if (this.selectedID) {
      this.selectedID = null;
      for (let i = 0; i < this.aircrafts.length; i++) {
        if (this.aircrafts[i].id === id) {
          this.eventBusService.emit(new EventData('updateAircraft', this.aircrafts[i]));
        }
      }
      return;
    }
    this.selectedID = id;
  }

  deleteAircraft(aircraft: Aircraft): void {
    this.eventBusService.emit(new EventData('deleteAircraft', aircraft));
  }
}
