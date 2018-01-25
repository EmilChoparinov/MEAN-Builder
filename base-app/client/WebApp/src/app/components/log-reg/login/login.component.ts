// DEPENDENCIES
import { Component, OnInit } from '@angular/core';

// PROVIDERS
import { UserService } from './../../../services/user/user.service';
import { Router } from '@angular/router';

// JSON CLASSES & INTERFACES
import { User } from '../../../classes/user';
import { IUser } from '../../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser;
  serverMessage: string;
  constructor(private _router: Router, private _userService: UserService) {
    this.user = new User();
    this.serverMessage = '';
  }

  ngOnInit() {
  }

  login() {
    this._userService.loginUser(this.user, (res) => {

      // if the login was successful continue to the dashboard
      // else display the response the backend gave
      if (res.success) {
        this._router.navigate(['dashboard']);
      } else {
        this.serverMessage = res.output.message;
      }
    });
  }

}
