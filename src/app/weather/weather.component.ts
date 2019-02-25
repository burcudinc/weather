import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherForm: FormGroup;
  locations = [];
  forecast: any;

  constructor(private ds: DataService, private request: HttpClient) {
  }

  ngOnInit() {
    this.locations = this.ds.getLocation();
    console.log(this.locations);
    this.weatherForm = new FormGroup({
      location: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.request.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.weatherForm.get('location').value + '&APPID=e2a70df609409399305160f3784c017b')
      .subscribe((response: any) => {
        this.forecast = response;
        this.forecast = {temp: (this.forecast.main.temp - 273.15).toFixed(0), description: this.forecast.weather[0].description};

      });

  }
}
