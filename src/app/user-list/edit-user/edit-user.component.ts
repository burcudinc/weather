import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userForm: FormGroup;
  editedItem;
  id;

  constructor(private  ds: DataService, private route: ActivatedRoute) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit() {
    const users = this.ds.getUsers();
    users.forEach(elem => {
      if (elem.id === parseInt(this.id)) {
        console.log(elem)
        this.editedItem = elem;
      }
    });
    this.userForm = new FormGroup({
      userMail: new FormControl(this.editedItem.email),
      userPassword: new FormControl(this.editedItem.password)
    });
  }

  onSubmit() {
    this.ds.editUser(this.id, this.userForm.get('userMail').value, this.userForm.get('userPassword').value);
  }
}
