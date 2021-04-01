import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DialogContentBase, DialogRef } from '@progress/kendo-angular-dialog';
import { LookupComponentFactory } from '../classes/lookup-component-factory.class';
import { LookupType } from '../enums/lookup-type.enum';
import { ColumnSetting } from '../interfaces/column-setting.interface';
import { LookupComponent } from '../interfaces/lookup-component.interface';
import { Checkable } from '../interfaces/checkable.interface';


@Component({
  selector: 'app-lookup-dialog',
  templateUrl: './lookup-dialog.component.html',
  styleUrls: ['./lookup-dialog.component.css']
})
export class LookupDialogComponent extends DialogContentBase implements OnInit {

  @Input("lookupType")
  private lookupType: LookupType;

  public lookupComponent: LookupComponent;
  public columnConfig: Array<ColumnSetting>;
  public lookupData;
  public loading = false;

  constructor(public dialogRef: DialogRef, private http: HttpClient) {
    super(dialogRef);
  }

  ngOnInit() {
    this.lookupComponent = LookupComponentFactory.create(this.lookupType);
    this.columnConfig = this.lookupComponent.getColumnConfig();
    this.getData();
  }

  getData() {
    this.loading = true;
    this.http.get(this.lookupComponent.getAPIUrl()).subscribe((response) => {
      this.lookupData = response;
      this.loading = false;
    })
  }

}