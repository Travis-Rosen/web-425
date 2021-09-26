// Author: Travis Rosen
// Date: 09/19/2021
// Name: sign-in-component.ts
// Description:sign in forms and error message


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }
  //Binding data
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]

    })
  }
  //Capturing values from forms
  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId= parseInt(formValues.studentId);
    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1);
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'The Student ID you entered is invalid. Please try again.';
    }
  }
  //Return forms controls
  get form() {
    return this.signinForm.controls;
  }

}
