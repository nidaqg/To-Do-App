import React from "react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Button,
  Heading,
  Text
} from "@chakra-ui/react";
import "./LoginFormStyles.scss";

export const LoginForm = () => {
  return (
      <Box className="login-form">
    <Box className="form-box">
        <Box className="heading-container">
            <Heading as="h2" size="xl">Login</Heading>
            <Text mt={2} fontSize="sm">Let's get it done!</Text>

        </Box>

      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" mb={3} focusBorderColor="pink.100"/>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" mb={3} focusBorderColor="pink.100"/>
      </FormControl>


     <Box className="btn-container">
      <Button 
      width="100%"
      rightIcon={<ArrowForwardIcon/>}
      colorScheme="pink" 
      type="submit">
       login
      </Button>
      </Box>

    </Box>
    <Box mt={3}>
        <Text textAlign="center">Don't have an account? <Link className="text-link" to="/signup">Sign Up</Link> now.</Text>
    </Box>
    </Box>
  );
};
