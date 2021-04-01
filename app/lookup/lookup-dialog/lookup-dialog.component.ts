import { Component, Input, OnInit } from '@angular/core';
import { DialogContentBase, DialogRef } from '@progress/kendo-angular-dialog';
import { LookupComponentFactory } from '../classes/lookup-component-factory.class';
import { LookupType } from '../enums/lookup-type.enum';
import { LookupComponent } from '../interfaces/lookup-component.interface';

@Component({
  selector: 'app-lookup-dialog',
  templateUrl: './lookup-dialog.component.html',
  styleUrls: ['./lookup-dialog.component.css']
})
export class LookupDialogComponent extends DialogContentBase implements OnInit {

  @Input("lookupType")
  private lookupType: LookupType;

  public lookupComponent: LookupComponent;

  constructor(public dialogRef: DialogRef) {
    super(dialogRef);
   }

  ngOnInit() {
    this.lookupComponent = LookupComponentFactory.create(this.lookupType);
    
    
  }

}