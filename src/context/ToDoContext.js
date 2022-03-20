import React, { useState, createContext, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const ToDoContext = createContext();

export const ToDoContextProvider = ({ children }) => {
  //todo list
  //each item = { item: todo item name, id: id, progress: 0, 1 or 2}
  const [toDoList, setToDoList] = useState([]);

  const { user } = useContext(AuthContext);
  console.log(user);

  //save to localstorage every time list changes
  useEffect(() => {
    if (toDoList.length) {
      localStorage.setItem(`${user.id}-list`, JSON.stringify(toDoList));
    }
  }, [toDoList]);

  //retreive from local storage every time app loads
  useEffect(() => {
    if (user) {
      const getList = localStorage.getItem(`${user.id}-list`);
      if (getList) {
        const newList = JSON.parse(getList);
        setToDoList(newList);
      }
    }
  }, [user]);

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
    const newList = toDoList.filter((x) => x.id !== toDoitem.id);
    setToDoList(newList);
  };

  //handle change progress status forwards
  const statusChangeForward = (toDoitem) => {
    const newList = toDoList.map((item) => {
      if (toDoitem.id === item.id) {
        return {
          item: item.item,
          id: item.id,
          progress: item.progress === 2 ? 2 : item.progress + 1,
        };
      } else return item;
    });
    setToDoList(newList);
  };

  //handle change progress status backwards
  const statusChangeBack = (toDoitem) => {
    const newList = toDoList.map((item) => {
      if (toDoitem.id === item.id) {
        return {
          item: item.item,
          id: item.id,
          progress: item.progress === 0 ? 0 : item.progress - 1,
        };
      } else return item;
    });
    setToDoList(newList);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDoList,
        handleToDoSubmit,
        deleteToDo,
        statusChangeBack,
        statusChangeForward,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
