import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource';
import { Ticket } from '../models/ticket.model';
import { TicketService } from '../services/ticket.service';
import { FormsModule } from '@angular/forms';

const client = generateClient<Schema>();

@Component({
  selector: 'app-ticket-management',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ticket-management.component.html',
  styleUrl: './ticket-management.component.css',
})
export class TicketManagementComponent {
  // tickets: any[] = [];
  loading = false;
  tickets: { [key: string]: Ticket[] } = {
    backlog: [],
    ready: [],
    inprogress: [],
    block: [],
    test: [],
    done: [],
  };
  statuses: string[] = [
    'backlog',
    'ready',
    'inprogress',
    'block',
    'test',
    'done',
  ];
  ticketData: Partial<Ticket> = {};
  isEditMode: boolean = false;

  constructor(private ticketService: TicketService) {}
  ngOnInit(): void {
    // this.loadTicket();
    this.loadTickets();
  }

  loadTickets(): void {
    const allTickets = this.ticketService.getTickets();
    this.statuses.forEach((status) => {
      this.tickets[status] = allTickets.filter(
        (ticket) => ticket.status === status
      );
    });
  }

  saveTicket(): void {
    if (this.isEditMode && this.ticketData.id !== undefined) {
      console.log(this.ticketData);
      this.ticketService.updateTicket(this.ticketData.id, this.ticketData);
      // this.updateTickets();
    } else {
      console.log(this.ticketData);
      this.ticketService.addTicket(this.ticketData as Omit<Ticket, 'id'>);
      // this.createTickets();
    }
    this.resetForm();
    this.loadTickets();
  }

  editTicket(ticket: Ticket): void {
    this.ticketData = { ...ticket };
    this.isEditMode = true;
  }

  deleteTicket(id: any): void {
    this.ticketService.deleteTicket(id);
    this.loadTickets();
  }

  resetForm(): void {
    this.ticketData = {};
    this.isEditMode = false;
  }

  // loadTicket() {
  //   try {
  //     this.loading = true;
  //     client.models.Ticket.observeQuery().subscribe({
  //       next: ({ items, isSynced }) => {
  //         this.tickets = items;
  //         this.loading = false;
  //         console.log(this.tickets);
  //       },
  //     });
  //   } catch (error) {
  //     this.loading = false;
  //     console.error('error fetching tickets', error);
  //   }
  // }

  // createTickets() {
  //   try {
  //     client.models.Ticket.create(this.ticketData);
  //     this.listTickets();
  //   } catch (error) {
  //     console.error('error creating ticket', error);
  //   }
  // }

  // updateTickets() {
  //   try {
  //     client.models.Ticket.update(this.ticketData);
  //     this.listTickets();
  //   } catch (error) {
  //     console.error('error updating ticket', error);
  //   }
  // }

  // deleteTickets(id: string) {
  //   try {
  //     client.models.Ticket.delete({
  //       id: id,
  //     });
  //     this.listTickets();
  //   } catch (error) {
  //     console.error('error creating ticket', error);
  //   }
  // }
}
