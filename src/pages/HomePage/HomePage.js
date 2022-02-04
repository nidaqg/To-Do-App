import React from "react";
import "animate.css";
import "./HomePageStyles.scss";

import { useNavigate } from "react-router-dom";
import { Box, Image, Center, Button } from "@chakra-ui/react";
import logo from "./../../assets/homepage-logo.png";

export const HomePage = () => {

  const navigate = useNavigate()
  return (
    <div className="homepage-container">
      <Box className="logo-container animate__animated animate__fadeIn animate__slower">
        <Image src={logo} />
        <Box>
          <Center className="homepage-text">
            Simple and elegant To Do List for helping you get it done!
            <Button
              marginY={4}
              colorScheme="pink"
              onClick={() => {navigate("/todo")}}
            >
              Get Started
            </Button>
          </Center>
        </Box>
      </Box>
    </div>
  );
};
