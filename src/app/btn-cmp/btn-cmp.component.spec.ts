import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCmpComponent } from './btn-cmp.component';

describe('BtnCmpComponent', () => {
  let component: BtnCmpComponent;
  let fixture: ComponentFixture<BtnCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
