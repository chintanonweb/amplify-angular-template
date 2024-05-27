import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../../amplify/data/resource';
const client = generateClient<Schema>();
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  todos: any[] = [];
  tickets: any[] = [];

  ngOnInit(): void {
    this.listTodos();
    // this.listTickets();
  }

  listTodos() {
    try {
      client.models.Todo.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          this.todos = items;
          console.log(this.todos);
          
        },
      });
    } catch (error) {
      console.error('error fetching todos', error);
    }
  }

  listTickets() {
    try {
      client.models.Ticket.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          this.tickets = items;
          console.log(this.tickets);
        },
      });
    } catch (error) {
      console.error('error fetching tickets', error);
    }
  }
}
