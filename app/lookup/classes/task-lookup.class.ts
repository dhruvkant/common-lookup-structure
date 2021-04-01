import { State } from "@progress/kendo-data-query";
import { ColumnSetting } from "../interfaces/column-setting.interface";
import { AbstractLookup } from "./abstract-lookup.class";

export class TaskLookup extends AbstractLookup {
  columnConfig: ColumnSetting[] = [
    {
      field: "OPTM_TASKID",
      title: "Task ID",
      type: "text",
      width: "100"
    },
    {
      field: "OPTM_TASKCODE",
      title: "Task Code",
      type: "text",
      width: "100"
    },
    {
      field: "OPTM_WONO",
      title: "WO#",
      type: "text",
      width: "100"
    },
    {
      field: "OPTM_FGCODE",
      title: "Item Code",
      type: "text",
      width: "100"
    },
    {
      field: "OPTM_FROMOPRCODE",
      title: "From OPR Code",
      type: "text",
      width: "100"
    }
  ];

  constructor(title: string) {
    super(title);
  }

  getTableColumns() {
    return this.columnConfig;
  }

  getAPIUrl() {
    return "api/AdvanceSFDC/GetAllTasks";
  }
}
