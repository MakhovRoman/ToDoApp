import React from 'react';
import 'styles/index.scss';
import { TodoList } from '../todo-list/TodoList';
import { TodoPanel } from '../todo-panel/TodoPanel';
import { TodoModal } from '../todo-modal/TodoModal';

export const App = () => {
  return (
    <div className='wrapper' data-testid='app'>
      <h1>TODO LIST</h1>
      <div className='content'>
        <TodoPanel />
        <TodoList />
        <TodoModal />
      </div>
    </div>
  )
}
