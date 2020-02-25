import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../common/user.service';

@Component({
	selector: 'add-user',
	templateUrl: './adduser.component.html'
})

export class AdduserComponent {

	editPage = false;
  userForm: FormGroup;
  user: any;

	constructor (public activateRoute: ActivatedRoute, public router: Router, public userService: UserService) {

    if ( this.userService.isLoggedIn ) {
      this.router.navigate(['']);
    }
		activateRoute.params.subscribe( (res) => {
			if (res.id) {
        this.editPage = true;
        this.userService.getUser(res.id).subscribe( (res) => {
          this.user = res;
        });
      } else {
        this.editPage = false;
      }
		});

		this.userForm = new FormGroup ({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]
      }),
      phone: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]{10,14}$')
        ]
      }),
      password: new FormControl('', Validators.required),
      cPassword: new FormControl('', Validators.required)
    });
  }

  onSubmit(event) {
    event.preventDefault();
    let payLoad = {
      firstName : this.userForm.controls.firstName.value,
      lastName : this.userForm.controls.lastName.value,
      email : this.userForm.controls.email.value,
      password : this.userForm.controls.password.value,
      updatedOn : new Date(),
      active : true
    }
    this.userService.registerUser(payLoad).subscribe( (res) => {
      console.log(res);
    })
  }

  resetForm() {
      this.userForm.reset();
  }

  cancelForm() {
      this.router.navigate(['']);
  }
}
