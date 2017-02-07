import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: any = {};
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('user') !== null) {
      this.userService.setUser(JSON.parse(localStorage.getItem('user')));
      this.userService.logged = true;
      this.router.navigate(['front']);
    } else if (this.userService.getUser().password !== undefined) {
      this.userService.logIn();
    }
  }

  logIn = (user: any) => {
    this.userService.setUser(user);
    this.userService.logIn();
  }

}
