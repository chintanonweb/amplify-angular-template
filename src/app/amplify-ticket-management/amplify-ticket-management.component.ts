import { Component, ViewChild } from '@angular/core';
import { TicketService } from '../services/ticket.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../../amplify/data/resource';

const client = generateClient<Schema>();
export interface Ticket {
  id?: any;
  title?: string;
  description?: string;
  assignee?: string;
  priority?: 'low' | 'medium' | 'high';
  status?: 'backlog' | 'ready' | 'inprogress' | 'block' | 'test' | 'done';
}

@Component({
  selector: 'app-amplify-ticket-management',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    AmplifyAuthenticatorModule,
  ],
  templateUrl: './amplify-ticket-management.component.html',
  styleUrl: './amplify-ticket-management.component.css',
})
export class AmplifyTicketManagementComponent {
}
