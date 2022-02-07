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
import "./SignUpFormStyles.scss";

export const SignUpForm = () => {
  return (
    <Box className="sign-up-form">
    <Box className="signup-box">
        <Box className="heading-container">
            <Heading as="h2" size="xl">Sign Up</Heading>
            <Text mt={2} fontSize="sm">Let's get it done!</Text>

        </Box>
      <FormControl>
        <FormLabel htmlFor="displayName">Display Name</FormLabel>
        <Input id="displayName" focusBorderColor="pink.100" type="text" mb={3} />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" mb={3} focusBorderColor="pink.100"/>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" mb={3} focusBorderColor="pink.100"/>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password">Re-Enter Password</FormLabel>
        <Input id="reenterpassword" type="password" mb={3} focusBorderColor="pink.100"/>
      </FormControl>

     <Box className="btn-container">
      <Button 
      width="100%"
      rightIcon={<ArrowForwardIcon/>}
      colorScheme="pink" 
      type="submit">
        Sign Up
      </Button>
      </Box>
    </Box>
    <Box mt={3}>
    <Text textAlign="center">Already have an account? <Link className="text-link" to="/login">Log in</Link> now.</Text>
</Box>
</Box>
  );
};
