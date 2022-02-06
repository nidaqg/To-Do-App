import React, { useState, useContext } from "react";
import "./ToDoCardStyles.scss";
import { Box, Heading } from "@chakra-ui/react";
import { ToDoItem } from "../ToDoItem/ToDoItem";
import { ToDoContext } from "../../context/ToDoContext";

export const ToDoCard = () => {

  const {toDoList} = useContext(ToDoContext);

  return (
    <>
        <div className="list-box">
          <Box w="100%" p={4}>
            <Heading p={4} as="h4"
            size="md">
              To-Do
            </Heading>
            {toDoList
              ? toDoList.filter(list => {
                  if(list.progress === 0){
                  return list
              }}
              )
              .map((listitem) => (
                  <ToDoItem
                    key={listitem.id}
                    todoItem={listitem}
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
            {toDoList
              ? toDoList.filter(list => {
                  if(list.progress === 1){
                  return list
              }}
              )
              .map((listitem) => (
                  <ToDoItem
                    key={listitem.id}
                    todoItem={listitem}
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
            {toDoList
              ? toDoList.filter(list => {
                  if(list.progress === 2){
                  return list
              }}
              )
              .map((listitem) => (
                  <ToDoItem
                    key={listitem.id}
                    todoItem={listitem}
                  />
                ))
              : null}
          </Box>
        </div>
    </>
  );
};
