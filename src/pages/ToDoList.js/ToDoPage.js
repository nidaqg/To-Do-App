import {
  InputRightElement,
  Button,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";

import "animate.css";

import React, { useState, useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";
import { ToDoCard } from "../../components/ToDoCard/ToDoCard";
import "./ToDoListStyles.scss";

export const ToDoPage = () => {
  //get submit function from context
  const { handleToDoSubmit } = useContext(ToDoContext);
  //store temp user input value
  const [userInput, setUserInput] = useState("");

  //handle button click
  const handleClick = () => {
    handleToDoSubmit(userInput);
    setUserInput("");
  };
  return (
    <div className="todo-container animate__animated animate__fadeIn">
          <div className="search-container">
            <Text mb={4} fontSize="lg">
              Add something to the list to get started
            </Text>
            <InputGroup>
              <Input
                focusBorderColor="pink.100"
                placeholder="things to do..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  colorScheme="pink"
                  h="1.75rem"
                  size="md"
                  onClick={() => handleClick()}
                >
                  Add
                </Button>
              </InputRightElement>
            </InputGroup>
          </div>

          <div className="list-container">
            <ToDoCard />
          </div>
    </div>
  );
};
