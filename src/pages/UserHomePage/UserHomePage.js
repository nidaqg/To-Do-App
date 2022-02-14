import {
  Box,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import "./UserHomeStyles.scss";

import { AuthContext } from "../../context/AuthContext";

export const UserHomePage = () => {
  const navigate = useNavigate();
  const {user, isLoading} = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let currentUser = "";
  if(user){
    currentUser = user.displayName
  } else {
    currentUser = "to Done With It"
  }

  return (
    <div className="user-home-container">
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

      ):(
<>
      <Heading>{`Welcome ${currentUser}!`}</Heading>

      <Box className="user-content">
        <Box className="user-box">
          <Text fontSize="lg" textAlign="center">
            Edit your display picture or display name.
          </Text>
          <Button
            marginTop={6}
            colorScheme="pink"
            onClick={() => {
              console.log("Edit");
            }}
          >
            Edit Profile
          </Button>
        </Box>
        <Box className="user-box">
          <Text fontSize="lg" textAlign="center">
            Dive into your lists and get them done!
          </Text>

          <Button
            marginTop={6}
            colorScheme="pink"
            onClick={() => {
              navigate("/todo");
            }}
          >
            My Lists
          </Button>
        </Box>
        <Box className="user-box">
          <Text fontSize="lg" textAlign="center">
            Leave feedback fro the creators of Done With It!
          </Text>
          <Button marginTop={6} colorScheme="pink" onClick={onOpen}>
            Feedback
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Thank you so much for using Done With It!
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                Have feedback on how we can make our app better? Have a
                favourite feature you want to talk about? Whatever you want to
                say, we want to hear it!
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="pink" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button colorScheme="pink">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
      <Box></Box>
      </>
      )
    }
    </div>
  );
};
