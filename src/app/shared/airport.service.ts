import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airport } from '../airport';

@Injectable({providedIn: 'root'})
export class AirportService {

  constructor(private http: HttpClient) {}

  private airportsUrl = 'api/airports';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(this.airportsUrl);
  }

  addAirport(airport: Airport): Observable<Airport> {
    return this.http.post<Airport>(this.airportsUrl, airport, this.httpOptions);
  }

  updateAirport(airport: Airport): Observable<any> {
    return this.http.put(this.airportsUrl, airport, this.httpOptions);
  }

  deleteAirport(airport: Airport): Observable<Airport> {
    const id = typeof airport === 'number' ? airport : airport.id;
    const url = `${this.airportsUrl}/${id}`;

    return this.http.delete<Airport>(url, this.httpOptions);
  }
}
