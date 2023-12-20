import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  logindata: any;
  constructor(
    private fb: FormBuilder,
    private service: CarService,
    private toaster: ToastrService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    const obj = this.loginForm.value;
    let data = {
      username: obj.username,
      password: obj.password,
    };
    this.service.postLogin(data).subscribe(
      (res: any) => {
        this.logindata = res;
        this.toaster.success('login Sucessfully');
        this.router.navigateByUrl('dashboard');

        console.log('loginSucceed', res);
      },
      (error) => {
        console.log('loginFailed', error);
      }
    );
  }
}
