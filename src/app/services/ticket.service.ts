// src/app/services/ticket.service.ts
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [
    { id: 1, title: 'Implement AWS Amplify Gen 2 Authentication', description: 'By default, your auth resource is scaffolded using email as the default login mechanism.', assignee: 'Alice', priority: 'high', status: 'inprogress' },
    { id: 2, title: 'Implement AWS Amplify Gen 2 Data', description: 'Set up Amplify Data. This includes building a real-time API and database using TypeScript to define your data model and securing your API with authorization rules.', assignee: 'Charlie', priority: 'low', status: 'inprogress' },
    { id: 3, title: 'AWS Amplify Gen 2 Serverless Functions', description: 'Amplify Functions are powered by AWS Lambda, and allow you to perform a wide variety of customization through self-contained functions.', assignee: 'Bob', priority: 'medium', status: 'ready' },
  ];

  getTickets(): Ticket[] {
    return this.tickets;
  }

  getTicket(id: any): Ticket | undefined {
    return this.tickets.find(ticket => ticket.id === id);
  }

  addTicket(ticket: Omit<Ticket, 'id'>): void {
    this.tickets.push({ ...ticket, id: uuidv4() });
  }

  updateTicket(id: any, updatedTicket: Partial<Ticket>): void {
    const ticket = this.getTicket(id);
    if (ticket) {
      Object.assign(ticket, updatedTicket);
    }
  }

  deleteTicket(id: any): void {
    this.tickets = this.tickets.filter(ticket => ticket.id !== id);
  }
}
