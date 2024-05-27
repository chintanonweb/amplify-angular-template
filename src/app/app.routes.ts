import { Routes } from '@angular/router';
import { TicketManagementComponent } from './ticket-management/ticket-management.component';
import { HomeComponent } from './home/home.component';
import { AmplifyTicketManagementComponent } from './amplify-ticket-management/amplify-ticket-management.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'simple-jira', component: TicketManagementComponent},
    {path:'amplify-jira', component: AmplifyTicketManagementComponent},
];
