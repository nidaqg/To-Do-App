import { ChevronRightIcon, ChevronLeftIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Text, IconButton } from '@chakra-ui/react';
import React, {useContext} from 'react';
import "./ToDoItemStyles.scss";

import {ToDoContext} from "../../context/ToDoContext"

export const ToDoItem = ({todoItem}) => {

  const {deleteToDo, statusChangeBack, statusChangeForward} = useContext(ToDoContext);

  return (
      <>
      <Box className='todo-item'>
        <Text fontSize="md">{todoItem.item}</Text>
        
      <span className='arrows-span'>
        <IconButton
        isDisabled = {todoItem.progress === 0 ? true : false}
        isRound
        size="s"
        colorScheme="pink"
        aria-label='back'
        onClick={()=> statusChangeBack(todoItem)}
        icon={<ChevronLeftIcon/>}
        />
     <Text color="grey" fontSize="sm" marginX={2}>Move item</Text>
        <IconButton
        isDisabled = {todoItem.progress === 2 ? true : false}
        isRound
        size="s"
        colorScheme="pink"
        aria-label='forward'
        onClick={()=> statusChangeForward(todoItem)}

        icon={<ChevronRightIcon/>}
        />
        <CloseIcon
        className='close-btn'
        ml={2} 
        w={2}
        onClick={()=> deleteToDo(todoItem)}
        />

      </span>

      </Box>
      </>
  )
};
