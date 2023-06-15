export enum TtodoItemStatus {
  COMPLETE = 'complete',
  INCOMPLETE = 'incomplete'
}

export const TodoSelect = {
  ...TtodoItemStatus,
  ALL: "all"
};

export type TSelectKey = keyof typeof TodoSelect;
export type TSelectVal = typeof TodoSelect[TSelectKey];

export type TtodoItem = {
  todoStatus: TtodoItemStatus,
  title: string,
  id: number
}
