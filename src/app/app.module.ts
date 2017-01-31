import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { Routing } from "./routing";
import { AppComponent } from './ts/app.component';
import { LoginComponent } from './ts/login/login.component';
import { SignupComponent } from './ts/signup/signup.component';
import { RegAlertComponent } from './ts/reg-alert-popup/reg-alert-popup.component';
import { DashboardComponent } from './ts/dashboard/dashboard.component';
import { NavbarComponent } from './ts/navbar/navbar.component';
import { CircuitDetailsComponent } from './ts/circuit-details/circuit-details.component';
import { Dashboard2Component } from './ts/dashboard-2/dashboard-2.component';
import { ActionResultComponent } from './ts/action-result/action-result.component';
import { ManageUsersComponent } from './ts/manage-users/manage-users.component';

@NgModule({
  imports: [
    BrowserModule,
    Routing,
    FormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RegAlertComponent,
    DashboardComponent,
    NavbarComponent,
    CircuitDetailsComponent,
    Dashboard2Component,
    ActionResultComponent,
    ManageUsersComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
