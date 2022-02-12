import React, { useContext } from "react";
import "animate.css";
import "./HomePageStyles.scss";

import { useNavigate } from "react-router-dom";
import { Box, Image, Center, Button,Spinner } from "@chakra-ui/react";
import logo from "./../../assets/homepage-logo.png";
import { AuthContext } from "../../context/AuthContext";

export const HomePage = () => {

  const {isLoading} = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="homepage-container">

    {
      isLoading ? (
        <div className="loading-container">
<Spinner
  thickness='4px'
  speed='1s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
</div>
      ): (

      <Box className="logo-container animate__animated animate__fadeIn animate__slower">
        <Image src={logo} />
        <Box>
          <Center className="homepage-text">
            Simple and elegant To Do List for helping you get stuff done!
            <Button
              marginY={4}
              colorScheme="pink"
              onClick={() => {
                navigate("/todo");
              }}
            >
              Get Started
            </Button>
          </Center>
        </Box>
      </Box>
            )
          }
      
    </div>
  );
};
