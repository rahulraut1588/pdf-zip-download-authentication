import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../common/user.service';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  loginForm: FormGroup;

  constructor (public activateRoute: ActivatedRoute, public router: Router, public userService: UserService) {
    this.loginForm = new FormGroup ({
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]
      }),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    let payload = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    }
    this.userService.getUserByEmail(payload).subscribe( (res) => {
      if(res) {
        localStorage.setItem('CODITAS_USER', JSON.stringify(res));
        console.log(localStorage);
        this.router.navigate(['']);
      }
    })
  }

  resetForm() {
    this.loginForm.reset();
  }

  cancelForm() {
      this.router.navigate(['']);
  }
}
