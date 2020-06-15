import { Component, OnInit } from '@angular/core';
import {AirportService} from './shared/airport.service';
import {Aircraft} from './aircraft';
import {AircraftService} from './shared/aircraft.service';
import {Airport} from './airport';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private airportService: AirportService,
              private aircraftService: AircraftService
              ) {}

  aircrafts: Aircraft[];
  airports: Airport[];

  ngOnInit() {
    this.getAircrafts();
  }

  getAirports(): void {
    this.airportService.getAirports()
      .subscribe(airports => this.airports = airports);
  }

  getAircrafts(): void {
    this.aircraftService.getAircrafts()
      .subscribe(aircrafts => this.aircrafts = aircrafts);
  }

  onEdit(value) {
    if (value === 'aircraft') {
      this.getAircrafts();
    }
  }

  deleteAircraft(aircraft: Aircraft) {
    this.aircrafts = this.aircrafts.filter(h => h.id !== aircraft.id);
    this.aircraftService.deleteAircraft(aircraft).subscribe(_ => {
      this.getAircrafts();
    });
  }
}
