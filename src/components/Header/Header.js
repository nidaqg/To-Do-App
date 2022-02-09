import {
  Avatar,
  Box,
  Center,
  Image,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyles.scss";
import logo from "./../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";
import { DropDown } from "../DropDowm/DropDown";

export const Header = () => {
  const { user, isAuthenticated, onLogout } = useContext(AuthContext);

  return (
    <div className="header-container">
      <div className="left-header">
        <Link to="/">
          <Image src={logo} boxSize="100px" objectFit="cover" />
        </Link>
      </div>
      <Center className="right-header">
        <Link className="header-link" to="/">
          Home
        </Link>
        <Link className="header-link" to="/todo">
          To-Do List
        </Link>
        {isAuthenticated ? (
          <>
            <Box className="header-link logout" onClick={() => onLogout()}>
              Logout
            </Box>
              <span className="user-span">
              <DropDown/>
              </span> 
          </>
        ) : (
          <Link className="header-link" to="/login">
            Login
          </Link>
        )}
      </Center>
    </div>
  );
};
