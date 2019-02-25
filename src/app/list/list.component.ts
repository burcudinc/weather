import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
   locations = [];

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.locations = this.ds.getLocation();
  }

  deleteLocation(id: any) {
    this.ds.deleteLocation(id);
    this.locations = this.ds.getLocation();
  }


}
