import {
  Box,
  Center,
  Image,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./HeaderStyles.scss";
import logo from "./../../assets/logo.png";
import { AuthContext } from "../../context/AuthContext";
import { DropDown } from "../DropDown/DropDown";

export const Header = () => {
  const {isAuthenticated, onLogout } = useContext(AuthContext);

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
          <Link className="header-link login-link" to="/login">
            Login
          </Link>
        )}
      </Center>
    </div>
  );
};
