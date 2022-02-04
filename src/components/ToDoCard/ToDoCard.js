import React, { useState } from "react";
import "./ToDoCardStyles.scss";
import { Box, Heading } from "@chakra-ui/react";
import { ToDoItem } from "../ToDoItem/ToDoItem";

export const ToDoCard = () => {
  const [todoList, setToDoList] = useState([
    {
      item: "grocery shopping",
      id: 1,
      progress: 1,
    },
    {
      item: "coding",
      id: 2,
      progress: 0,
    },
  ]);

  return (
    <>
        <div className="list-box">
          <Box w="100%" p={4}>
            <Heading p={4} as="h4" size="md">
              To-Do
            </Heading>
            {todoList
              ? todoList.filter(list => {
                  if(list.progress === 0){
                  return list
              }}
              )
              .map((listitem) => (
                  <ToDoItem
                    key={listitem.id}
                    todoItem={listitem.item}
                  />
                ))
              : null}
          </Box>
        </div>

        <div className="list-box">
          <Box w="100%" p={4}>
            <Heading p={4} as="h4" size="md">
              In Progress
            </Heading>
            {todoList
              ? todoList.filter(list => {
                  if(list.progress === 1){
                  return list
              }}
              )
              .map((listitem) => (
                  <ToDoItem
                    key={listitem.id}
                    todoItem={listitem.item}
                  />
                ))
              : null}
          </Box>
        </div>

        <div className="list-box">
          <Box w="100%" p={4}>
            <Heading p={4} as="h4" size="md">
              Done With It!
            </Heading>
            {todoList
              ? todoList.filter(list => {
                  if(list.progress === 3){
                  return list
              }}
              )
              .map((listitem) => (
                  <ToDoItem
                    key={listitem.id}
                    todoItem={listitem.item}
                  />
                ))
              : null}
          </Box>
        </div>
    </>
  );
};
