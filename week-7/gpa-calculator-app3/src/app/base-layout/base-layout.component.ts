// Author: Travis Rosen
// Date: 09/12/2021
// Name: base-layout.component.ts
// Description: Creating assignment title for base layout page


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;


  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'Assignment 7.2 - Reactive Forms'
  }

  ngOnInit(): void {
  }

  signOut() {
    //Removes any data left ffrom transcripts
    this.cookieService.deleteAll();
    //Returns user to session and sign in page
    this.router.navigate(['/session/sign-in'])

  }

}
