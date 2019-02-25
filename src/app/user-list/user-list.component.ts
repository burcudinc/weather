import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [];
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.users = this.ds.getUsers();
  }

  deleteUser(id: any) {
    this.ds.deleteUser(id);
    this.users = this.ds.getUsers();
  }
}
