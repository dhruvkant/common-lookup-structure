import { State } from "@progress/kendo-data-query";
import { ColumnSetting } from "./column-setting.interface";

export interface LookupComponent {
  title: string;
  tableState: State;
  getTableColumns(): ColumnSetting[];
  getAPIUrl(): string;
}
