import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UserService } from "../../UserServices/user.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    standalone: false
})
export class SignUpComponent implements OnInit {
  userData: any;
  value = "";
  signUpForm!: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.URLValue.next('signup');
    this.signUpForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        contactNumber: ['', [Validators.required, Validators.maxLength(10)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
    });
    // this.user.currentUserData.subscribe(userData => this.userData = userData)
  }
  signUp(){
    // this.user.changeData(data);
    console.log(this.signUpForm.controls["name"].value)
    console.log(this.signUpForm.controls["contactNumber"].value)
    console.log(this.signUpForm.controls["email"].value)
    console.log(this.signUpForm.controls["password"].value)
    console.log(this.signUpForm.controls["confirmPassword"].value)
    this.router.navigateByUrl("login");
  }


}
