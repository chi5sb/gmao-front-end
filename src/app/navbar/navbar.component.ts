import { Component, OnInit } from '@angular/core';
import { User } from '../controller/model/user.model';
import {UserService} from '../controller/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mobile = false;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    }
  }
  get User(): User {

    return this.userService.User;
  }
  isAdmin() {
    return this.User.role !== 'admin';
  }

  Collaborateur() {
    return this.User.role !== 'collaborateur';
  }
  ischef() {
    return this.User.role !== 'chef-equipe';
  }
  isStockRespo() {
    return this.User.role !== 'reponsableDeStock';
  }
}
