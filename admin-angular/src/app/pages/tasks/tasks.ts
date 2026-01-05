import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrls: ['./tasks.css']
})
export class TasksComponent implements OnInit {
  tasks: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Placeholder: will fetch tasks from backend later
    this.tasks = [
      { title: 'Task 1', user: 'user1@example.com', completed: false },
      { title: 'Task 2', user: 'user1@example.com', completed: true }
    ];
  }
}
