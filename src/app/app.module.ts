import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirportsComponent } from './airports/airports.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';
import { BtnCmpComponent } from './btn-cmp/btn-cmp.component';
import { AircraftAddCmpComponent } from './aircraft-add-cmp/aircraft-add-cmp.component';


@NgModule({
  declarations: [
    AppComponent,
    AirportsComponent,
    AircraftComponent,
    BtnCmpComponent,
    AircraftAddCmpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
