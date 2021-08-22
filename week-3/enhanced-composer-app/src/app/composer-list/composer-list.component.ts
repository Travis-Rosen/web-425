/**
 * Title: composer-list.component.ts
 * Author: Travis Rosen
 * Date: 22 August 2021
 * Description: Composer List Component
 */



import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;


  //Creating new composer class
  constructor() {
    this.composers = new Composer().getComposers();

  }

  ngOnInit(): void {
  }

}
