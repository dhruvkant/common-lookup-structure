import { TaskLookup } from "./task-lookup.class";

export class FromTaskLookup extends TaskLookup {
    apiUrl: string = "api/AdvanceSFDC/GetFromTasks";

    constructor() {
        super("From Task");
    } 

}