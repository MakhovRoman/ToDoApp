import React, { useEffect, useState } from 'react';
import styles from './TodoList.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { TodoItem } from '../todo-item/TodoItem';
import { switchActualList } from '../../utils/switchFilteredList';

export const TodoList: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todoList);
  const todoSelect = useSelector((state: RootState) => state.todoSelect.select);

  const [filteredList, setFilteredList] = useState(todoList);
  useEffect(() => switchActualList(
    todoSelect,
    setFilteredList,
    todoList
  ), [todoSelect, todoList]);

  return (
    <div className={styles.todoList}>
      {
        filteredList.length === 0 ?
        <span className={styles.todoList_empty}>No Todo Found</span>
        :
        <div>
          {
            filteredList.map((todo) =>
              <TodoItem
                title={todo.title}
                todoStatus={todo.todoStatus}
                key={todo.id}
                id={todo.id}
              />
            )
          }
        </div>
      }
    </div>
  )
}
