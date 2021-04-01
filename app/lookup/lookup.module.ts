import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LookupComponent } from './lookup/lookup.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LookupDialogComponent } from './lookup-dialog/lookup-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GridModule,
    DropDownsModule,
    DialogsModule,
    ButtonsModule

  ],
  declarations: [LookupComponent, LookupDialogComponent],
  entryComponents: [LookupDialogComponent],
  exports: [LookupComponent]
})
export class LookupModule { }