import { State } from "@progress/kendo-data-query";
import { ColumnSetting } from "../interfaces/column-setting.interface";
import { LookupComponent } from "../interfaces/lookup-component.interface";

export abstract class AbstractLookup implements LookupComponent {
  title: string = "";
  tableState: State = {};

  constructor(title: string) {
    this.title = title;
  }

  getColumnConfig(): ColumnSetting[] {
    throw new Error("Method not implemented.");
  }

  getAPIUrl(): string {
    throw new Error("Method not implemented.");
  }
}
