import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;

  constructor(private ds: DataService) {
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.email, Validators.required]),
      userPassword: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.ds.addUser(this.userForm.get('userName').value, this.userForm.get('userPassword').value);
    alert('User was Added Successfully!');
    this.userForm.reset();
  }
}
