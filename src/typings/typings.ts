export enum todoItemStatus {
  COMPLETE = 'complete',
  INCOMPLETE = 'incomplete'
}

export const TtodoSelect = {
  ...todoItemStatus,
  ALL: "all"
};

export type todoItem = {
  todoStatus: todoItemStatus,
  title: string
}
