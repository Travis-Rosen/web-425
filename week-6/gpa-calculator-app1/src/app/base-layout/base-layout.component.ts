// Author: Travis Rosen
// Date: 09/12/2021
// Name: base-layout.component.ts
// Description: Creating assignment title for base layout page


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  assignment: string;


  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts'
  }

  ngOnInit(): void {
  }

}
