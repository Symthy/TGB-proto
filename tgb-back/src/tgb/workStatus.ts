import { ValueInvalidException } from "@/exception/valueInvalidException";
import { Status } from "@prisma/client";

const WorkStates = {
  WAITING: 'Waiting',
  IN_PROGRESS: 'InProgress',
  COMPLETED: 'Completed',
  PENDDING: 'Pending',
} as const;
type keys = keyof typeof WorkStates;
export type WorkState = typeof WorkStates[keys];

export class WorkStatusValue {

  static default() {
    return 'Waiting';
  }

  static contains(state: any): state is WorkState {
    return Object.values(WorkStates).includes(state);
  }

  static convert(state: WorkState): Status | never {
    for (const [key, value] of Object.entries(WorkStates)) {
      if (value === state as string) {
        return key as Status;
      }
    }
    throw new ValueInvalidException("", "status");
  }

  static reconvert(status: Status): WorkState | never {
    for (const [key, value] of Object.entries(WorkStates)) {
      if (key === status as string) {
        return value as WorkState;
      }
    }
    throw new ValueInvalidException("", "status");
  }
}
