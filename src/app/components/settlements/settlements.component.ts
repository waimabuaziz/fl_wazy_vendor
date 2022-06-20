import { Component, OnInit } from '@angular/core';
import { invoiceDB } from '../../shared/tables/invoice';

@Component({
  selector: 'app-settlements',
  templateUrl: './settlements.component.html',
  styleUrls: ['./settlements.component.scss']
})
export class SettlementsComponent implements OnInit {

  public settlement = [];

  constructor() {
    this.settlement = invoiceDB.data;
  }

  public settings = {
    actions: {
      position: 'right'
    },
    columns: {
      no: {
        title: 'No'
      },
      invoice: {
        title: 'Invoice'
      },
      date: {
        title: 'Date'
      },
      shipping: {
        title: 'Shipping'
      },
      amount: {
        title: 'Amount'
      },
      tax: {
        title: 'Tax'
      },
      total: {
        title: 'Total'
      }
    },
  };

  ngOnInit(): void {
    
  }

}
