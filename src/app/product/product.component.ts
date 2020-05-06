import { Component,Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component ({
  selector: 'product-section',
  templateUrl: 'product.component.html'
})
export class ProductSection { 
  productInfo = {
    "message":"APIPACK_FETCHED",
    "result":[
      {
        "description":"PROD",
        "packId":"1",
        "packName":"SOAP",
        "docFileName":"doc.html",
        "dataFileName":"data.html",
        "usagePlan":[
          {
            "planId":"1",
            "planName":"Gold",
            "subscribed":true,
            "subscriptionStatus":"active",
            "subscriptionDuration":"6Months"
          },
          {
            "planId":"2",
            "planName":"Platinum",
            "subscribed":false,
            "subscriptionStatus":null,
            "subscriptionDuration":"1Year"
          },
          {
            "planId":"3",
            "planName":"Silver",
            "subscribed":true,
            "subscriptionStatus":"active",
            "subscriptionDuration":"3Months"
          },
          {
            "planId":"4",
            "planName":"Free",
            "subscribed":false,
            "subscriptionStatus":null,
            "subscriptionDuration":"1Month"
          }
        ]
      }
    ],
    "resultString":"",
    "status":"SUCCESS",
    "statusCode":200
  }
  tabClick(tab) {
  console.log(tab);
  }
  constructor(public dialog: MatDialog) {}
  animal: string;
  name: string;
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddTopic, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
