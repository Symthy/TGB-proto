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
}
