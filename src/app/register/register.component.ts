import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register = (user: any) => {
    this.userService.setUser(user);
    this.userService.register();
  }
}
