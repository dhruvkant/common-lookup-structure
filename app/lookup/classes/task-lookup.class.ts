import { State } from "@progress/kendo-data-query";
import { ColumnSetting } from "../interfaces/column-setting.interface";
import { LookupComponent } from "../interfaces/lookup-component.interface";

export class TaskLookup implements LookupComponent {
    
    tableState: State = {};
    title: string;

    columnConfig: ColumnSetting[] = [
       {
         field: 'OPTM_TASKID',
         title: "Task ID",
         type: 'text',
         width: '100'
       },
       {
         field: 'OPTM_TASKCODE',
         title: "Task Code",
         type: 'text',
         width: '100'
       },
       {
         field: 'OPTM_WONO',
         title: "WO#",
         type: 'text',
         width: '100'
       }
       ,
       {
         field: 'OPTM_FGCODE',
         title: "Item Code",
         type: 'text',
         width: '100'
       }
       ,
       {
         field: 'OPTM_FROMOPRCODE',
         title: "From OPR Code",
         type: 'text',
         width: '100'
       }
    ];
    apiUrl: string = "api/AdvanceSFDC/GetAllTasks";

    constructor(title: string) {
        this.title = title;
    }

    getTableColumns() {
        return this.columnConfig;
    }

    getAPIUrl() {
        return this.apiUrl;
    }

}