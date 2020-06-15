import {Component, EventEmitter, Output, Input} from '@angular/core';
import {Aircraft} from '../aircraft';
import {AircraftService} from '../shared/aircraft.service';


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

  constructor(private aircraftService: AircraftService) {
  }

  onEdit(id) {
    if (this.selectedID) {
      this.selectedID = null;
      for (let i = 0; i < this.aircrafts.length; i++) {
        if (this.aircrafts[i].id === id) {
          this.aircraftService.updateAircraft(this.aircrafts[i])
            .subscribe(_ => {
              this.reloadAirport.emit('aircraft');
            });
        }
      }
      return;
    }
    this.selectedID = id;
  }

  deleteAircraft(aircraft: Aircraft): void {
    this.onDeleteAircraft.emit(aircraft);
  }
}
