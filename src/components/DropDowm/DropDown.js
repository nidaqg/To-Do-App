import React from "react";
import {
  Fade,
  Box,
  useDisclosure,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import "./DropDownStyles.scss";


export const DropDown = () => {
    const { isOpen, onToggle } = useDisclosure();
  return (
    <>
        <Avatar
          size="md"
          bg="purple"
          name="Random User"
          src="https://bit.ly/dan-abramov"
        />
        <ChevronDownIcon className="header-link-avatar" onClick={onToggle} w={6} h={6} />
        <Fade in={isOpen}>
        <Box className="dropdown-component">
          
        </Box>
        </Fade>
    </>
  );
};
