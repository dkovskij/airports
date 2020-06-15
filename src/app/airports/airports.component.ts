import { Component, OnInit } from '@angular/core';
import {AirportService} from '../shared/airport.service';
import {AircraftService} from '../shared/aircraft.service';
import {Airport} from '../airport';
import {Aircraft} from '../aircraft';

@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.scss']
})
export class AirportsComponent implements OnInit {

  airports: Airport[];
  aircrafts: Aircraft[];
  airportCode = '';
  airportTitle = '';
  airportAddress = '';
  showList = true;
  noText = true;
  inputName = '';

  constructor(private airportService: AirportService, private aircraftService: AircraftService) { }

  ngOnInit() {
    this.getAirports();
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

  genId(airports: Airport[]): number {
    return airports.length > 0 ? Math.max(...airports.map(airport => airport.id)) + 1 : 1;
  }

  validInput() {
    if (!this.airportCode || !this.airportTitle || !this.airportAddress) {
      this.noText = true;
    } else {
      this.noText = false;
    }
  }

  addAirport() {
    if (!this.airportCode || !this.airportTitle || !this.airportAddress) {
      return;
    } else {
      const airport: Airport = {
        id: this.genId(this.airports),
        code: this.airportCode,
        title: this.airportTitle,
        address: this.airportAddress,
      };
      this.airportService.addAirport(airport)
        .subscribe(port => {
          this.airports.push(port);
        })

      this.airportCode = '';
      this.airportTitle = '';
      this.airportAddress = '';
      this.noText = true;
    }

  }

  delete(airport: Airport): void {
    this.airports = this.airports.filter(h => h !== airport);
    this.airportService.deleteAirport(airport).subscribe();
  }

  edit(i) {
    if (this.showList === true) {
      this.showList = false;
    } else {
      this.showList = true;
    }
    console.log(i);
  }

}
