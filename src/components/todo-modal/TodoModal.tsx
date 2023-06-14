import { Button, Dialog, DialogContent, DialogTitle, IconButton, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, ChangeEvent } from 'react';

import styles from './TodoModal.module.scss';
import { todoItemStatus } from '../../typings/typings';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../store/slices/todoListSlice';
import { RootState } from '../../store/store';
import { setModalOpen } from '../../store/slices/modalSlice';

export const TodoModal: React.FC = () => {
  const [todoStatus, setTodoStatus] = useState(todoItemStatus.INCOMPLETE);
  const [title, setTitle] = useState('');
  const [disabled, setDisabled] = useState(true);

  const isOpen = useSelector((state: RootState) => state.setModalOpen.isOpen);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModalOpen(!isOpen));
  }

  const handleChangeSelect = (event: SelectChangeEvent<todoItemStatus>) => {
    setTodoStatus(event.target.value as todoItemStatus);
  }

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const content = event.target.value;

    setTitle(content);

    content ? setDisabled(false) : setDisabled(true);
  }

  const handleSubmit = () => {
    const result = {title, todoStatus}

    dispatch(addTodo(result));
    dispatch(setModalOpen(!isOpen));

    setTitle('');
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        fullWidth={true}
        classes={{
          paper: styles.dialog_wrapper
        }}
      >
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <form
            className={styles.dialog_content}
          >
            <TextField
              label="Title"
              variant='outlined'
              value={title}
              onChange={handleChangeTitle}
            />
            <Select
              value={todoStatus}
              onChange={handleChangeSelect}
              sx={{
                marginTop: '50px'
              }}
            >
              <MenuItem value={todoItemStatus.COMPLETE}>Complete</MenuItem>
              <MenuItem value={todoItemStatus.INCOMPLETE}>Incomplete</MenuItem>
            </Select>
          </form>
          <Stack
            direction="row"
            sx={{
              marginTop: '50px'
            }}
          >
            <Button
              variant='contained'
              size='large'
              disabled={disabled}
              onClick={handleSubmit}
            >
              Add
            </Button>
            <Button
              variant='contained'
              classes={{
                root: styles.dialog_cancel
              }}
            >
              Cancel
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  )
}
