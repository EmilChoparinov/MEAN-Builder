// DEPENDENCIES
import { Component, OnInit } from '@angular/core';

// JSON CLASSES & INTERFACES
import { ServerMessage } from './../../../classes/server-message';
import { IServerMessage } from './../../../interfaces/server-message';
import { User } from './../../../classes/user';
import { IUser } from './../../../interfaces/user';

// PROVIDERS
import { UserService } from './../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: IUser;
  serverMessage: string;
  constructor(private _userService: UserService, private _router: Router) {
    this.user = new User();
    this.serverMessage = '';
  }

  ngOnInit() {
  }

  registerUser() {
    this._userService.registerUser(this.user, (res) => {

      // if registration went successfully continue to dashboard
      // else display the message the server gave
      if (res.success) {
        this._router.navigateByUrl('/dashboard');
      } else if (res.output.message) {
        this.serverMessage = res.output.message;
      }
    });
  }

}
