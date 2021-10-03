/**
 * Title: bill.ts
 * Author: Travis Rosen
 * Date: 10/3/2021
 * Description: Bill class
 */

import { ShopItem } from "../models/shop-item.interface";

export class Bill {
  //Variables for Bill class - shopItems(ShopItem objects), parts(part costs), labor(labor costs)
  shopItems: ShopItem[];
  partsAmount: number;
  laborAmount: number;
  //Setting shopItems to empty array & parts/labor amounts to 0
  constructor() {
    this.shopItems = [];
    this.partsAmount = 0;
    this.laborAmount = 0;
  }
  //Adding shop item
  addShopItem(shopItem: ShopItem): void {
    this.shopItems.push(shopItem);
  }
  //Function to get shop total
  getShopTotal(): number {
    let total: number = 0;
    //Looping shopItems array to create total
    for (let shopItem of this.shopItems) {
      total += shopItem.amount;
    }

    return total;
  }
  //Function to calculate the total bill amount - includes shop total, parts, and labor costs.
  getBillTotal(): number {
    const shopTotal: number = this.getShopTotal();
    const parts: number = this.getPartsAmount();
    const labor: number = this.getLaborAmount();
    const total: number = Number(shopTotal) + Number(parts) + Number(labor);

    return total;
  }
  //Returning parts amount
  getPartsAmount(): number {
    return this.partsAmount;
  }
  //Returning labor amount
  getLaborAmount(): number {
    return this.laborAmount;
  }
}


