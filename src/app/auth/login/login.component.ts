import { Component, OnInit } from "@angular/core";
import { UserService } from "../../UserServices/user.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
    standalone: false
})
export class LoginComponent implements OnInit {
  userData: any;
  loginForm!: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private userService : UserService) {}

  ngOnInit() {
    this.userService.URLValue.next('login');
    this.loginForm = this.formBuilder.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(6)]]
    });
    // this.user.currentUserData.subscribe(userData => (this.userData = userData));
  }

  changeData(event : any) {
    // var msg = event.target.value;
    // this.user.changeData(msg);
  }
  login() {
    console.log(this.loginForm.controls["email"].value)
    console.log(this.loginForm.controls["password"].value)
    this.router.navigateByUrl("");
    this.userService.loggedIn.next(true);
    // this.user.changeData(data);
  }
}
