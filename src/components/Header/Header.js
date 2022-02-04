import { Avatar, Center, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderStyles.scss";
import logo from "./../../assets/logo.png";

export const Header = () => {
  return (
    <div className="header-container">
      <div className="left-header">
        <Link to="/">
        <Image 
        src={logo} 
        boxSize="100px"
        objectFit="cover"
        />
        </Link>
      </div>
      <Center className="right-header">
        <Link className="header-link" to="/">
          Home
        </Link>
        <Link className="header-link" to="/todo">
          To-Do List
        </Link>

        <Link className="header-link" to="/homepage">
          <span className="user-span">
            <Avatar
              size="md"
              name="user Name"
              src="https://bit.ly/dan-abramov"
            />
            <ChevronDownIcon className="header-link"  w={6} h={6}/>
          </span>
        </Link>
      </Center>
    </div>
  );
};
