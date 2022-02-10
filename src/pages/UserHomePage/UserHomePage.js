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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./UserHomeStyles.scss";

export const UserHomePage = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="user-home-container">
      <Heading>Welcome to Done With It!</Heading>

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
    </div>
  );
};
