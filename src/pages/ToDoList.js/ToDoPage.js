import { Box, Heading } from '@chakra-ui/react';
import React, {useState} from 'react';
import "./ToDoListStyles.scss";


export const ToDoPage = () => {
    const [todoList, setToDoList] = useState([
        {
            item: "grocery shopping",
            id: 1,
            progress: 0
        },
        {
            item: "coding",
            id: 2,
            progress: 0
        }
    ])


  return (
      <div className='todo-container'>
          <div className='list-container'>

              <div className='list-box'>
                  <Box w="100%" p={4}>
                   <Heading as="h4" size='md'>To Do</Heading>
                  </Box>
                
              </div>

              <div className='list-box'>
              <Box w="100%" p={4}>
                   <Heading as="h4" size='md'>In Progress</Heading>
                  </Box>

              </div>
              <div className='list-box'>
              <Box w="100%" p={4}>
                   <Heading as="h4" size='md'>Done with It!</Heading>
                  </Box>

              </div>

          </div>
      </div>

  )
}

