import { Component,Inject } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'add-dicussion',
  templateUrl: 'add.discussion.html'
})
export class AddTopic {

  constructor(
    public dialogRef: MatDialogRef<AddTopic>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
    
  }
} 