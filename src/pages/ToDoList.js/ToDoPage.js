import { Box, Heading } from '@chakra-ui/react';
import React, {useState} from 'react';
import { ToDoCard } from '../../components/ToDoCard/ToDoCard';
import "./ToDoListStyles.scss";


export const ToDoPage = () => {


  return (
      <div className='todo-container'>
          <div className='list-container'>

                    <ToDoCard />
            

          </div>
      </div>

  )
}

