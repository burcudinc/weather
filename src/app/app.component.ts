import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';

  constructor(private ds: DataService) {
    this.ds.setLocationFromStorage();
    this.ds.setUsersFromStorage();

  }
}
