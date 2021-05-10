import { Component, OnInit } from '@angular/core';
import { User } from '../controller/model/user.model';
import {UserService} from '../controller/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  get User(): User {
    return this.userService.User;
  }
  ngOnInit(): void {
  }

  connected() {
    this.userService.isconnected();
  }
}
