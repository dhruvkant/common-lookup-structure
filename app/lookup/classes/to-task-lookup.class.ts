import { TaskLookup } from "./task-lookup.class";

export class ToTaskLookup extends TaskLookup {
    apiUrl: string = "api/AdvanceSFDC/GetToTasks";

    constructor() {
        super("To Task");
    } 
}