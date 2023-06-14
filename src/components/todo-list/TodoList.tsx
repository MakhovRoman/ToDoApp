import React from 'react';
import styles from './TodoList.module.scss';

export const TodoList: React.FC = () => {
  return (
    <>
      <div className={styles.todoList}>
        <span className={styles.todoList_empty}>No Todo Found</span>
      </div>
    </>
  )
}
