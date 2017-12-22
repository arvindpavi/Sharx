import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:max-line-length
  dropDownValues = [{ 'value': 'app', 'label': 'app' }, { 'value': 'code', 'label': 'code' }, { 'value': 'unit test', 'label': 'unit test' }];

  action(selectedItem) {
  }
}
