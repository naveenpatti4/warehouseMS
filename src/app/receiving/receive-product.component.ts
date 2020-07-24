import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'NW-receive-product',
  templateUrl: './receive-product.component.html',
  styleUrls: ['./receive-product.component.css']
})
export class ReceiveProductComponent implements OnInit {
showForm : boolean;
  constructor() { }

  ngOnInit(): void {
  }

  saveTrackingNumber() {
    this.showForm = true;
  }

  receiveProduct() {
    console.log("You clicked receive product button");
  }

  finishedReceiving() {
    console.log("Finished receiving");
  }
}
