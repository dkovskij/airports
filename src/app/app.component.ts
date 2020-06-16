import { Component, OnInit } from '@angular/core';
import { AirportService } from './shared/airport.service';
import { Aircraft } from './aircraft';
import { AircraftService } from './shared/aircraft.service';
import { Airport } from './airport';
import { EventBusService } from './shared/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private airportService: AirportService,
              private aircraftService: AircraftService,
              private eventBusService: EventBusService
              ) {}

  aircrafts: Aircraft[];
  airports: Airport[];

  ngOnInit() {
    this.getAircrafts();
    this.getAirports();

    this.eventBusService.on('addAircraft', (data: Aircraft) => {
      this.aircraftService.addAircraft(data)
        .subscribe((_) => {
          this.getAircrafts();
        });
    });

    this.eventBusService.on('updateAircraft', (data: Aircraft) => {
      this.aircraftService.updateAircraft(data)
        .subscribe(_ => {
          this.getAircrafts();
        });
    });

    this.eventBusService.on('deleteAircraft', (data: Aircraft) => {
      this.aircraftService.deleteAircraft(data)
        .subscribe((_) => {
          this.getAircrafts();
        });
    });

    this.eventBusService.on('addAirport', (data: Airport) => {
      this.airportService.addAirport(data)
        .subscribe(res => {
          this.airports.push(res);
        });
    });

    this.eventBusService.on('updateAirport', (data: Airport) => {
      this.airportService.updateAirport(data)
        .subscribe(res => {
          this.getAirports();
        });
    });

    this.eventBusService.on('deleteAirport', (data: Airport) => {
      this.airportService.deleteAirport(data)
        .subscribe((_) => {
          this.getAirports();
        });
    });
  }

  getAirports(): void {
    this.airportService.getAirports()
      .subscribe(airports => this.airports = airports);
  }

  getAircrafts(): void {
    this.aircraftService.getAircrafts()
      .subscribe(aircrafts => this.aircrafts = aircrafts);
  }
}
