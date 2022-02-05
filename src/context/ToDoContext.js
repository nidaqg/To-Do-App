import React, { useState, createContext } from "react";

export const ToDoContext = createContext();

export const ToDoContextProvider = ({ children }) => {
    //todo list
  const [toDoList, setToDoList] = useState([]);

  //handle user adding new item to to do list
  const handleToDoSubmit = (value) => {
    if (toDoList !== null) {
      setToDoList([...toDoList, { item: value, id: Date.now(), progress: 0 }]);
    } else {
      setToDoList([
        {
          item: value,
          id: Date.now(),
          progress: 0,
        },
      ]);
    }
  };

  //handle delete todo item
  const deleteToDo = (toDoitem) => {
const newList = toDoList.filter(
    (x) => x.id !==toDoitem.id
);
setToDoList(newList);

  }


  return (
  <ToDoContext.Provider
  value={{
      toDoList,
      handleToDoSubmit,
      deleteToDo,
  }}
  >{children}</ToDoContext.Provider>
  );
};
