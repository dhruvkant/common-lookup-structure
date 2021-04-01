import { LookupType } from "../enums/lookup-type.enum";
import { FromTaskLookup } from "./from-task-lookup.class";
import { TaskLookup } from "./task-lookup.class";
import { ToTaskLookup } from "./to-task-lookup.class";

export class LookupComponentFactory {
    public static create(lookupType: LookupType) {
        switch(lookupType){
            case LookupType.FROM_TASK:
                return new FromTaskLookup();
            case LookupType.TO_TASK:
                return new ToTaskLookup();
            case LookupType.TASK:
                return new TaskLookup("Task");
            default:
                return new TaskLookup("Task");
        }
    }
}