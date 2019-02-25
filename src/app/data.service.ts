import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private location = [];
  private weather = [];
  private users = [];


  constructor() {
  }

  setLocationFromStorage() {
    if (localStorage.getItem('location')) {
      this.location = JSON.parse(localStorage.getItem('location'));
    }
  }


  addLocation(name) {
    this.location.push({id: this.location.length + 1, name: name});
    localStorage.setItem('location', JSON.stringify(this.location));
  }

  getLocation() {
    return this.location;
  }

  deleteLocation(id: any) {
    for (let i = 0; i < this.location.length; i++) {
      if ((this.location[i]).id === id) {
        this.location.splice(i, 1);
      }
    }
    localStorage.setItem('location', JSON.stringify(this.location));
  }


  editLocation(id: any, value: any) {
    for (let i = 0; i < this.location.length; i++) {
      if ((this.location[i]).id === parseInt( id )) {
      this.location[i].name = value;
      }
    }
    localStorage.setItem('location', JSON.stringify(this.location));

  }

    setUsersFromStorage() {
    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users'));
    }
  }

  addUser(userMail: any, userPassword: any) {
    this.users.push({id: this.users.length + 1 , email: userMail , password: userPassword });
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  getUsers(){
    return this.users;
  }


  deleteUser(id: any) {
    for (let i = 0; i < this.users.length; i++) {
      if ((this.users[i]).id === id) {
        this.users.splice(i, 1);
      }
    }
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  editUser(id: any, email: any, password: any) {
    for (let i = 0; i < this.users.length; i++) {
      if ((this.users[i]).id === parseInt( id )) {
        this.users[i].email = email;
        this.users[i].password = password;
      }
    }
    localStorage.setItem('location', JSON.stringify(this.location));
  }
}
