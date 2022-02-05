import {ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Text, IconButton } from '@chakra-ui/react';
import React from 'react';
import "./ToDoItemStyles.scss";

export const ToDoItem = ({todoItem}) => {
  return (
      <>
      <Box className='todo-item'>
        <Text fontSize="lg">{todoItem}</Text>
        
      <span className='arrows-span'>
        <IconButton
        isRound
        size="xs"
        colorScheme="pink"
        aria-label='back'
        icon={<ArrowBackIcon/>}
        />
     <Text color="grey" fontSize="sm" marginX={2}>Move item</Text>
        <IconButton
        isRound
        size="xs"
        colorScheme="pink"
        aria-label='forward'
        icon={<ArrowForwardIcon/>}
        />
      </span>
      </Box>
      </>
  )
};
