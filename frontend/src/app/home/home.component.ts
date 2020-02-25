import { Component } from '@angular/core';
import { UserService } from '../common/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  loggedInUser = false;

  constructor( public userService: UserService, public router: Router) {
    this.loggedInUser = this.userService.checkIfLoggedIn();
    console.log(this.loggedInUser);
    if(this.loggedInUser) {
      // this.router.navigate(['']);
    } else {
      // this.router.navigate(['/login']);
    }
  }

  logIn() {
    this.router.navigate(['/login']);
  }

  logOut() {
    this.userService.logout();
  }
}
