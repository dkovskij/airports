import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Aircraft} from '../aircraft';
import {AircraftService} from '../shared/aircraft.service';

@Component({
  selector: 'app-aircraft-add-cmp',
  templateUrl: './aircraft-add-cmp.component.html',
  styleUrls: ['./aircraft-add-cmp.component.scss']
})
export class AircraftAddCmpComponent implements OnInit {

  aircraftCode = '';
  noText = true;
  aircraftType = '';
  aircraftNum = '';
  aircraftMan = '';
  aircraftModel = '';
  aircraftAirport = '';
  aircrafts: Aircraft[];

  constructor(private aircraftService: AircraftService) { }

  ngOnInit() {
      this.aircraftService.getAircrafts()
        .subscribe(aircrafts => this.aircrafts = aircrafts);
  }

  @Output() reloadAirport = new EventEmitter();

  genId(aircrafts: Aircraft[]): number {
    return aircrafts.length > 0 ? aircrafts[aircrafts.length - 1].id + 1 : 1;
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
    if (!this.aircraftCode || !this.aircraftCode || !this.aircraftType || !this.aircraftNum || !this.aircraftMan || !this.aircraftModel) {
      return;
    } else {
      const aircraft: Aircraft = {
        id: this.genId(this.aircrafts),
        code: this.aircraftCode,
        type: this.aircraftType,
        num: this.aircraftNum,
        man: this.aircraftMan,
        model: this.aircraftModel,
        airport: this.aircraftAirport
      };
      this.aircraftService.addAircraft(aircraft)
        .subscribe(craft => {
          this.aircrafts.push(craft);
        });
      this.aircraftCode = '';
      this.aircraftType = '';
      this.aircraftNum = '';
      this.aircraftMan = '';
      this.aircraftModel = '';
      this.aircraftAirport = '';
      this.noText = true;

      this.reloadAirport.emit(null);
    }

  }
}
