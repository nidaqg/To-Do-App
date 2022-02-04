import { ArrowLeftIcon, ArrowRightIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import "./ToDoItemStyles.scss";

export const ToDoItem = ({todoItem}) => {
  return (
      <>
      <Box className='todo-item'>
        <Text fontSize="lg">{todoItem}</Text>
        
      <span className='arrows-span'>
     <ArrowBackIcon w={3} color="pink"/>
     <Text color="pink" fontSize="sm" marginX={2}>Move item</Text>
        <ArrowForwardIcon w={3} color="pink"/>
      </span>
      </Box>
      </>
  )
};
