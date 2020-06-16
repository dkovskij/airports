import {Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btn-cmp',
  templateUrl: './btn-cmp.component.html',
  styleUrls: ['./btn-cmp.component.scss'],
})
export class BtnCmpComponent {

  constructor() { }

  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit();
  }
}
