// DEPENDENCIES
import { Component, OnInit } from '@angular/core';

// JSON CLASSES & INTERFACES
import { IServerMessage } from '../../interfaces/server-message';

// PROVIDERS
import { Router } from '@angular/router';
import { UserService } from './../../services/user/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit() {
    this._userService.ensureUserIsLoggedIn((res) => {
      if (!res.success) {
        this._router.navigateByUrl('/');
      }
    });
  }

  logout() {

    // this will attempt to navigate to login reg regardless
    // of response. Login reg component can handle this
    this._userService.logoutUser((response) => {
      this._router.navigate(['']);
    });
  }

}
