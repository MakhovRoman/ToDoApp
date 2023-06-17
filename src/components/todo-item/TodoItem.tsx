import React from 'react';
import styles from './TodoItem.module.scss';

import CheckMark from '@assets/check-mark.svg';
import CheckBlack from '@assets/check-blank.svg'
import Delete from '@assets/delete.svg';

import { TtodoItem, TtodoItemStatus } from '@typings/typings';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { changeTodoStatus, removeTodo } from '@store/slices/todoListSlice';

export const TodoItem: React.FC<TtodoItem> = (props) => {
  const dispatch = useDispatch();

  const handleChangeStatus = () => {
    dispatch(changeTodoStatus(props.id));
  }

  const handleDeleteTodo = () => {
    dispatch(removeTodo(props.id));
  }

  return (
    <div className={styles.TtodoItem}>
      <div className={styles.TtodoItem_icon}
        onClick={handleChangeStatus}
      >
        {
            props.todoStatus === TtodoItemStatus.COMPLETE
            ?
            <CheckMark />
            :
            <CheckBlack />
          }
      </div>
      <div className={clsx(
        styles.TtodoItem_title,
        props.todoStatus === TtodoItemStatus.COMPLETE ? styles.TtodoItem_title_complete : ''
      )}>
        {props.title}
      </div>
      <div className={clsx(styles.TtodoItem_icon, styles.TtodoItem_delete)}
        onClick={handleDeleteTodo}
      >
        <Delete />
      </div>
    </div>
  )
}
