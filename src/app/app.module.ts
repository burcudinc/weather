import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { LocationComponent } from './location/location.component';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DataService} from './data.service';
import { EditComponent } from './list/edit/edit.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import {HttpClientModule} from '@angular/common/http';
import { MainNavComponent } from './main-nav/main-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    LocationComponent,
    ListComponent,
    EditComponent,
    UserComponent,
    UserListComponent,
    EditUserComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
