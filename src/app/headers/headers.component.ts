import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../UserServices/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})

export class HeadersComponent implements OnInit {

  page: any;
  loggedIn: any;
  userForm!: FormGroup;
  displayStyle = "none";
  constructor(private router: Router,
    private userService: UserService,
    public formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [''],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
  });
    this.userService.URLValue.pipe().subscribe((resp) => {
      this.page = resp
    });;
    this.userService.loggedIn.pipe().subscribe((resp) => {
      this.loggedIn = resp
    });
  }

  logout() {
    this.router.navigateByUrl("/login");
    this.userService.loggedIn.next(false);
    this.userForm.controls["name"].patchValue('')
    this.userForm.controls["email"].patchValue('')
    this.userForm.controls["password"].patchValue('')
  }

  updateUserPopupButton(){
    console.log(this.userForm.controls["name"].value);
    console.log(this.userForm.controls["email"].value);
    console.log(this.userForm.controls["password"].value);
    this.displayStyle = "none";
  }

  cancel() {
    this.displayStyle = "none";
  }

  updateUser(){
    this.displayStyle = "block";
    this.userForm.controls["name"].patchValue('')
    this.userForm.controls["email"].patchValue('')
    this.userForm.controls["password"].patchValue('')
  }

  deleteUserButtonPopup(){
    this.router.navigateByUrl("/login");
    this.userService.loggedIn.next(false);
    this.userForm.controls["name"].patchValue('')
    this.userForm.controls["email"].patchValue('')
    this.userForm.controls["password"].patchValue('')
  }

}
