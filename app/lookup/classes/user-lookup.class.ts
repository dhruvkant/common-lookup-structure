import { State } from "@progress/kendo-data-query";
import { ColumnSetting } from "../interfaces/column-setting.interface";
import { AbstractLookup } from "./abstract-lookup.class";

export class UserLookup extends AbstractLookup {
  constructor() {
    super("Users");
  }

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
