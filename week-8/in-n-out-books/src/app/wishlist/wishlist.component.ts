// Author: Travis Rosen
// Date: 09/04/2021
// Name: wishlist.component.ts
// Description: wishlist ts file to handle logic of the wish list from submission

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items:Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }
  //Adding wishlist item to items array
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);

  }


}
