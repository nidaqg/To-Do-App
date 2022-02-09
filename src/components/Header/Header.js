import { Avatar, Box, Center, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyles.scss";
import logo from "./../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";

export const Header = () => {

  const {user, isAuthenticated, onLogout} = useContext(AuthContext);

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
        {
          isAuthenticated ? (
            <>
          <Box className="header-link logout" onClick={()=>onLogout()}>Logout</Box>
          <Link className="header-link" to="/home">
          <span className="user-span">
            <Avatar
              size="md"
              bg="purple"
              name="Random User"
              src="https://bit.ly/dan-abramov"
            />
            <ChevronDownIcon className="header-link"  w={6} h={6}/>
          </span>
        </Link>
        </>
          ): (
          <Link className="header-link" to="/login">Login</Link>
          )
        }

      </Center>
    </div>
  );
};
