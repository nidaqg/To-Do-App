import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import "./SignUpFormStyles.scss";
import { AuthContext } from "../../context/AuthContext";

export const SignUpForm = () => {
  const { onSignUp } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setReenterPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <Box className="sign-up-form">
      <Box className="signup-box">
        <Box className="heading-container">
          <Heading as="h2" size="xl">
            Sign Up
          </Heading>
          <Text mt={2} fontSize="sm">
            Let's get it done!
          </Text>
        </Box>
        <FormControl>
          <FormLabel htmlFor="displayName">Display Name</FormLabel>
          <Input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            id="displayName"
            focusBorderColor="pink.100"
            type="text"
            mb={3}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email address</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            mb={3}
            focusBorderColor="pink.100"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            mb={3}
            focusBorderColor="pink.100"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="password">Re-Enter Password</FormLabel>
          <Input
            value={reenterpassword}
            onChange={(e) => setReenterPassword(e.target.value)}
            id="reenterpassword"
            type="password"
            mb={3}
            focusBorderColor="pink.100"
          />
        </FormControl>

        <Box className="btn-container">
          <Button
            onClick={() => onSignUp(email, password, reenterpassword, displayName)}
            width="100%"
            rightIcon={<ArrowForwardIcon />}
            colorScheme="pink"
            type="submit"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <Box mt={3}>
        <Text textAlign="center">
          Already have an account?{" "}
          <Link className="text-link" to="/login">
            Log in
          </Link>{" "}
          now.
        </Text>
      </Box>
    </Box>
  );
};
