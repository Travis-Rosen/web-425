/**
 * Title: composer-list.component.ts
 * Author: Travis Rosen
 * Date: 22 August 2021
 * Description: Composer List Component
 */


//Import Statements
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');


  //Creating new composer class
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    //After 500ms, this will call on the filterComposers function.
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));

  }

  ngOnInit(): void {
  }
  //Filter composers function by name (string)
  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }

}
