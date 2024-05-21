export interface Ticket {
    id: number;
    title: string;
    description: string;
    assignee: string;
    priority: 'low' | 'medium' | 'high';
    status: 'backlog' | 'ready' | 'inprogress' | 'block' | 'test' | 'done';
  }