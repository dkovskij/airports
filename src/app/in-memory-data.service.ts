import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const airports = [
      {id: 1, code: 'shrm', title: 'Аэропорт Шереметьево', address: 'МО, г. Шереметьево'},
      {id: 2, code: 'dmd', title: 'Аэропорт Домодедово', address: 'МО, г. Домодедово'},
      {id: 3, code: 'vko', title: 'Аэропорт Внуково', address: 'МО, г. Внуково'},
    ];
    const aircrafts = [
      {id: 1, code: 'bng', type: 'грузовой', num: '111', man: 'Boeing', model: '737', airport: 'dmd'},
      {id: 2, code: 'skh', type: 'пассажирский', num: '222', man: 'Sukhoi', model: '1', airport: 'dmd'},
      {id: 3, code: 'an', type: 'грузовой', num: '333', man: 'An', model: '2', airport: 'dmd'}
    ];
    return {airports, aircrafts};
  }
}
