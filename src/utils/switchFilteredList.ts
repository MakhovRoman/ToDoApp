import { Dispatch } from "react";
import { TSelectVal, TodoSelect, TtodoItem } from "@typings/typings";

export const switchActualList = (
  select: TSelectVal,
  cb: Dispatch<React.SetStateAction<TtodoItem[]>>,
  arr: TtodoItem[]
) => {
  switch(select) {
    case TodoSelect.ALL: {
      cb(arr);
      break;
    }
    case TodoSelect.COMPLETE: {
      const newList = arr.filter((todo) => todo.todoStatus === TodoSelect.COMPLETE);
      cb(newList);
      break;
    }
    case TodoSelect.INCOMPLETE: {
      const newList = arr.filter((todo) => todo.todoStatus === TodoSelect.INCOMPLETE);
      cb(newList);
      break;
    }
  }
}
