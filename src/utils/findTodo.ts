import { TtodoItem } from "../typings/typings";

type TAction = {
  payload: any;
  type: string;
}

export const findTodo = (arr: TtodoItem[], action: TAction) => {
  return arr.findIndex((todo: TtodoItem) => todo.id === action.payload)
}
