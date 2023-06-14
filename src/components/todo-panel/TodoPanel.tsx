import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useState } from 'react';

import styles from './TodoPanel.module.scss';
import { TtodoSelect, todoItemStatus } from '../../typings/typings';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setSelect } from '../../store/slices/todoSelectSlice';
import { setModalOpen } from '../../store/slices/modalSlice';

export const TodoPanel: React.FC = () => {
  const select = useSelector((state: RootState) => state.todoSelect.select);
  const isOpen = useSelector((state: RootState) => state.setModalOpen.isOpen);
  const dispatch = useDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSelect(event.target.value));
  }

  const handleClick = () => {
    dispatch(setModalOpen(!isOpen));
  }

  return (
    <div className={styles.todoPanel}>
      <Button
        variant='contained'
        onClick={handleClick}
      >
        Add Task
      </Button>
      <Select
        value={select}
        onChange={handleChange}
        sx={{
          minWidth: 130
        }}
      >
        <MenuItem value={TtodoSelect.ALL}>All</MenuItem>
        <MenuItem value={TtodoSelect.INCOMPLETE}>Incomplete</MenuItem>
        <MenuItem value={TtodoSelect.COMPLETE}>Complete</MenuItem>
      </Select>
    </div>
  )
}
