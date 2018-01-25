// DEPENDENCIES
import { Component, OnInit } from '@angular/core';

// PROVIDERS
import { UserService } from './../../services/user/user.service';
import { Router } from '@angular/router';

// JSON CLASSES & INTERFACES
import { ServerMessage } from './../../classes/server-message';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
    this._userService.ensureUserIsLoggedIn((res) => {

      // if the user is currently logged in the user should be sent
      // to the main app
      if (res.success) {
        this._router.navigate(['dashboard']);
      }
    });
  }

}
