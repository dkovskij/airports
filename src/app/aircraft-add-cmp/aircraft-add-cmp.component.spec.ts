import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftAddCmpComponent } from './aircraft-add-cmp.component';

describe('AircraftAddCmpComponent', () => {
  let component: AircraftAddCmpComponent;
  let fixture: ComponentFixture<AircraftAddCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AircraftAddCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftAddCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
