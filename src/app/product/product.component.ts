import { Component, Inject , ViewChild, Optional  } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

import { PlansService } from '../services/plans.service';

export interface UsersData {
  topic: string;
  category: string;
  description: string;
}

const ELEMENT_DATA: UsersData[] = [
  {topic: 'Desc1', category: 'Bug', description: 'Admin'},
  {topic: 'Desc2', category: 'Question', description: 'User'}
];

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

  displayedColumns: string[] = ['topic', 'description', 'category'];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
 
  constructor(public dialog: MatDialog) {}
  topic: string;
  category: string;
  description: string;
 
  openDialog(): void {
    const dialogRef = this.dialog.open(AddTopic, {
      
      data: {topic: this.topic, description: this.description, category: this.category}
    })
    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
      this.addRowData(result.data)
      }
    });
   
  }
 
  addRowData(row_obj){
    this.dataSource.push({
      topic:row_obj.topic,
      category:row_obj.category,
      description:row_obj.description
    });
    this.table.renderRows(); 
  }
}
  @Component({
  selector: 'add-discussion-section',
  templateUrl: 'add.discussion.html',
  
})
export class AddTopic {

  action:string;
  dataSource:any;
 
  constructor(
    public dialogRef: MatDialogRef<AddTopic>,
    
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.dataSource = {...data};
    this.action = this.dataSource.action;
  }
 
  doAction(){
    this.dialogRef.close({event:this.action,data:this.dataSource});
  }
  onNoClick(): void {
    this.dialogRef.close();
    
  }
} 
