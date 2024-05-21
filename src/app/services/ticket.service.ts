// src/app/services/ticket.service.ts
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [
    { id: 1, title: 'Ticket 1', description: 'Description 1', assignee: 'Alice', priority: 'high', status: 'backlog' },
    { id: 2, title: 'Ticket 2', description: 'Description 2', assignee: 'Bob', priority: 'medium', status: 'ready' },
    { id: 3, title: 'Ticket 3', description: 'Description 3', assignee: 'Charlie', priority: 'low', status: 'inprogress' },
  ];
  private nextId: number = 1;

  getTickets(): Ticket[] {
    return this.tickets;
  }

  getTicket(id: number): Ticket | undefined {
    return this.tickets.find(ticket => ticket.id === id);
  }

  addTicket(ticket: Omit<Ticket, 'id'>): void {
    this.tickets.push({ ...ticket, id: this.nextId++ });
  }

  updateTicket(id: number, updatedTicket: Partial<Ticket>): void {
    const ticket = this.getTicket(id);
    if (ticket) {
      Object.assign(ticket, updatedTicket);
    }
  }

  deleteTicket(id: number): void {
    this.tickets = this.tickets.filter(ticket => ticket.id !== id);
  }
}
