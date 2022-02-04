import React from 'react';
import 'animate.css';
import "./HomePageStyles.scss";
import {Box, Image} from "@chakra-ui/react";
import logo from "./../../assets/homepage-logo.png"

export const HomePage = () => {
  return (
  <div className='homepage-container'>
    <Box className='logo-container animate__animated animate__fadeIn animate__slower'>
    <Image src={logo}/>
    </Box>

  </div>
  );
};

