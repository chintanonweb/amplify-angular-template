export interface Ticket {
  id: any;
  title: string;
  description: string;
  assignee: string;
  priority: 'low' | 'medium' | 'high';
  status: 'backlog' | 'ready' | 'inprogress' | 'block' | 'test' | 'done';
}
