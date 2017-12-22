import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

export class DropDownValue {
  value: string;
  label: string;

  constructor(value: string, label: string) {
    this.value = value;
    this.label = label;
  }
}

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  @Input()
  values: DropDownValue[];

  @Output()
  select: EventEmitter<any>;

  constructor() {
    this.select = new EventEmitter();
  }

  selectItem(value) {
    this.select.emit(value);
  }

  ngOnInit() {
  }

}
