// Author: Travis Rosen
// Date: 09/04/2021
// Name: app.component.ts
// Description: Component ts file (Title page)


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  assignment: string;
  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books!'
  }

}
