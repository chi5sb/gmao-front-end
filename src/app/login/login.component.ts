import { User } from './../controller/model/user.model';
import { UserService } from './../controller/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  get User(): User {
    return this.userService.User;
  }

  connected() {
    this.userService.isconnected();
  }

  seConnecter(username, password) {
    this.userService.seConnecter(username, password);
  }

  ngOnInit(): void {}
}
