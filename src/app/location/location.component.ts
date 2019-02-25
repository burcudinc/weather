import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  location: FormGroup;

  constructor(private ds: DataService) {
  }

  ngOnInit() {
    this.location = new FormGroup({
      locationName: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.ds.addLocation(this.location.get('locationName').value);
    alert('Location was added successfully!');
    this.location.reset();
  }


}
