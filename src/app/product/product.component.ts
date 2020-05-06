import { Component,Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}

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

  constructor(public dialog: MatDialog) {}
  animal: string;
  name: string;
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddTopic, {
      
      data: {name: this.name, animal: this.animal}
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
  @Component({
  selector: 'add-discussion-section',
  templateUrl: 'add.discussion.html',
  
})
export class AddTopic {

  constructor(
    public dialogRef: MatDialogRef<AddTopic>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
    
  }
} 
