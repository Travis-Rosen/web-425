/**
 * Title: sign-in.component.ts
 * Author: Travis Rosen
 * Date: 22 August 2021
 * Description: ts file for sign-in
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn = false;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {queryParams: {isLoggedIn: this.isLoggedIn}, skipLocationChange: true})
  }

}