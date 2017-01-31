import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './ts/app.component';
import { LoginComponent } from './ts/login/login.component';
import { SignupComponent } from './ts/signup/signup.component';
import { RegAlertComponent } from './ts/reg-alert-popup/reg-alert-popup.component';
import { DashboardComponent } from './ts/dashboard/dashboard.component';
import { CircuitDetailsComponent } from './ts/circuit-details/circuit-details.component';
import { Dashboard2Component } from './ts/dashboard-2/dashboard-2.component';
import { ActionResultComponent } from './ts/action-result/action-result.component';
import { ManageUsersComponent } from './ts/manage-users/manage-users.component';


const router:Routes=[
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"login",component:LoginComponent},
    {path:"signup",component:SignupComponent},
    {path: "regAlert", component: RegAlertComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "circuitDetails", component: CircuitDetailsComponent},
    {path: "dashboard2", component: Dashboard2Component},
    {path: "actionResult", component: ActionResultComponent},
    {path: "manageUsers", component: ManageUsersComponent},
    {path:"**",redirectTo:"login"}
];

export const Routing = RouterModule.forRoot(router);