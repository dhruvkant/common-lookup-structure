import { LookupType } from "../enums/lookup-type.enum";
import { LookupComponent } from "../interfaces/lookup-component.interface";
import { FromTaskLookup } from "./from-task-lookup.class";
import { TaskLookup } from "./task-lookup.class";
import { ToTaskLookup } from "./to-task-lookup.class";
import { UserLookup } from "./user-lookup.class";

export class LookupComponentFactory {
  public static create(lookupType: LookupType): LookupComponent {
    switch (lookupType) {
      case LookupType.FROM_TASK:
        return new FromTaskLookup();
      case LookupType.TO_TASK:
        return new ToTaskLookup();
      case LookupType.TASK:
        return new TaskLookup("Task");
      case LookupType.USER:
        return new UserLookup();
      default:
        return new TaskLookup("Task");
    }
  }
}
