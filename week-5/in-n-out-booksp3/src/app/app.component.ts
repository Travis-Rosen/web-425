// Author: Travis Rosen
// Date: 09/28/2021
// Name: app.component.ts
// Description: AppComponent class file



import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;
  constructor() {
    this.assignment = 'Exercise 5.4 - Dialogs'
  }

}
