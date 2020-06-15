import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Aircraft} from '../aircraft';

@Injectable({providedIn: 'root'})



export class AircraftService {

  constructor(private http: HttpClient) {}

  private aircraftsUrl = 'api/aircrafts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAircrafts(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(this.aircraftsUrl);
  }

  addAircraft(aircraft: Aircraft): Observable<Aircraft> {
    return this.http.post<Aircraft>(this.aircraftsUrl, aircraft, this.httpOptions);
  }

  updateAircraft(aircraft: Aircraft): Observable<any> {
    return this.http.put(this.aircraftsUrl, aircraft, this.httpOptions);
  }

  deleteAircraft(aircraft: Aircraft): Observable<Aircraft> {
    const id = typeof aircraft === 'number' ? aircraft : aircraft.id;
    const url = `${this.aircraftsUrl}/${id}`;

    return this.http.delete<Aircraft>(url, this.httpOptions);
  }
}
