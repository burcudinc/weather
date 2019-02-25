import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationComponent} from './location/location.component';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './list/edit/edit.component';
import {UserComponent} from './user/user.component';
import {EditUserComponent} from './user-list/edit-user/edit-user.component';
import {UserListComponent} from './user-list/user-list.component';
import {WeatherComponent} from './weather/weather.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'location', component: LocationComponent},
  {path: 'locationList' , component: ListComponent},
  {path: 'editLocation/:id', component: EditComponent},
  {path: 'user', component: UserComponent},
  {path: 'editUser/:id', component: EditUserComponent},
  {path: 'userList', component: UserListComponent},
  {path: 'weather', component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
