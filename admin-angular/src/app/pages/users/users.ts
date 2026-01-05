import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrls: ['./users.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Placeholder: will fetch users from backend later
    this.users = [
      { email: 'user1@example.com', role: 'user' },
      { email: 'admin@example.com', role: 'admin' }
    ];
  }
}
