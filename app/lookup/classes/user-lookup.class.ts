import { State } from "@progress/kendo-data-query";
import { ColumnSetting } from "../interfaces/column-setting.interface";
import { LookupComponent } from "../interfaces/lookup-component.interface";

export class UserLookup implements LookupComponent {
  title: string = "Users";
  tableState: State = {};

  getColumnConfig(): ColumnSetting[] {
    return [
      {
        field: "name",
        title: "Name",
        type: "text",
        width: "100"
      },
      {
        field: "email",
        title: "Email",
        type: "text",
        width: "100"
      },
      {
        field: "website",
        title: "Website",
        type: "text",
        width: "100"
      }
    ];
  }

  getAPIUrl(): string {
    return "https://jsonplaceholder.typicode.com/users";
  }
}
