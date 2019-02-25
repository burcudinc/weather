import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DataService} from '../../data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  location: FormGroup;
  editedItem;
  id;

  constructor(private ds: DataService, private route: ActivatedRoute) {
    this.id = route.snapshot.params.id;
  }

  ngOnInit() {
    const locations = this.ds.getLocation();
    locations.forEach(elem => {
      if (elem.id === parseInt(this.id)) {
        this.editedItem = elem;
      }
    });
    this.location = new FormGroup({
      locationName: new FormControl(this.editedItem.name)
    });
  }

  onSubmit() {
   this.ds.editLocation( this.id, this.location.get('locationName').value);
   console.log('Location was editted successfully!');
  }
}
