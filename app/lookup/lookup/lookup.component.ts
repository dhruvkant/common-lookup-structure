import { Component, OnInit } from "@angular/core";
import { DialogService } from "@progress/kendo-angular-dialog";
import { LookupType } from "../enums/lookup-type.enum";
import { LookupDialogComponent } from "../lookup-dialog/lookup-dialog.component";

@Component({
  selector: "app-lookup",
  templateUrl: "./lookup.component.html",
  styleUrls: ["./lookup.component.css"]
})
export class LookupComponent implements OnInit {
  public listItems;
  public lookupType;

  constructor(private dialogService: DialogService) {}

  ngOnInit() {
    this.listItems = Object.keys(LookupType);
  }

  openLookup() {
    const dialogRef = this.dialogService.open({
      content: LookupDialogComponent
    });
    dialogRef.content.instance.lookupType = LookupType[this.lookupType];
  }
}
