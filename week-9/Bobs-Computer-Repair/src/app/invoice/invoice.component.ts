/**
 * Title: invoice-component.ts
 * Author: Travis Rosen
 * Date: 10/3/2021
 * Description: Invoice total component
 */
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bill } from '../services/bill';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  bill: Bill;

  constructor(private dialogRef: MatDialogRef<InvoiceComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.bill = data.bill;
    console.log(this.bill);
  }

  ngOnInit(): void {
  }

}
