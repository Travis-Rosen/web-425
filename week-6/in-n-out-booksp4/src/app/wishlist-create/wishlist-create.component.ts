// Author: Travis Rosen
// Date: 09/04/2021
// Name: wish-list-create.component.ts
// Description: wishlist-create ts file

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss']
})
export class WishlistCreateComponent implements OnInit {
  //Output using event emitter
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;
  //Casting object to IWishListItem
  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }
  //Call function when adding to wishlist
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors
    })
    this.item = {} as IWishlistItem;
  }



}
