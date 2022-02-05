import { InputRightElement, Button, Input, InputGroup, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ToDoCard } from "../../components/ToDoCard/ToDoCard";
import "./ToDoListStyles.scss";

export const ToDoPage = () => {
  const [userInput, setUserInput] = useState("");


  return (
    <div className="todo-container">

      <div className="search-container"> 
      <Text mb={4} fontSize="lg">Add something to the list to get started</Text>
        <InputGroup>
          <Input 
          focusBorderColor="pink.100"
          placeholder="things to do..."
          value={userInput} 
          onChange={(e)=> setUserInput(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button 
            colorScheme="pink"
            h="1.75rem" 
            size="md"
            onClick={()=> console.log(userInput)}
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
