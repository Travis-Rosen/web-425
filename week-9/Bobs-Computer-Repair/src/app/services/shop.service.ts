/**
 * Title: shop.service.ts
 * Author: Travis Rosen
 * Date: 10/3/2021
 * Description: Shop Service
 */


import { Injectable } from '@angular/core';
import { RepairService } from '../models/repair-service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() {

  }
  //This function will get repair services
  getRepairServices(): RepairService[] {
    //This is the array of repair service objects
    const repairServices: RepairService[] = [
      {
        title: 'Password Reset',
        amount: 39.99,
        checked: false
      },
      {
        title: 'Keyboard Cleaning',
        amount: 45.00,
        checked: false
      },
      {
        title: 'Software Installation',
        amount: 49.99,
        checked: false
      },
      {
        title: 'Tune-Up',
        amount: 89.99,
        checked: false
      },
      {
        title: 'Spyware Removal',
        amount: 99.99,
        checked: false
      },
      {
        title: 'RAM Upgrade',
        amount: 129.99,
        checked: false
      },
      {
        title: 'Disk Clean-up',
        amount: 149.99,
        checked: false
      }
    ];

    return repairServices;
  }
}
