import { ChevronRightIcon, ChevronLeftIcon, CloseIcon } from '@chakra-ui/icons';
import { Box, Text, IconButton, ListItem } from '@chakra-ui/react';
import React, {useContext} from 'react';
import "./ToDoItemStyles.scss";

import {ToDoContext} from "../../context/ToDoContext"

export const ToDoItem = ({todoItem}) => {

  const {deleteToDo} = useContext(ToDoContext);

  return (
      <>
      <Box className='todo-item'>
        <Text fontSize="lg">{todoItem.item}</Text>
        
      <span className='arrows-span'>
        <IconButton
        isRound
        size="s"
        colorScheme="pink"
        aria-label='back'
        icon={<ChevronLeftIcon/>}
        />
     <Text color="grey" fontSize="sm" marginX={2}>Move item</Text>
        <IconButton
        isRound
        size="s"
        colorScheme="pink"
        aria-label='forward'
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
