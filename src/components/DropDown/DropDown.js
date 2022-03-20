import React from "react";
import {
  Fade,
  Box,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  Image
} from "@chakra-ui/react";
import { ChevronDownIcon, EditIcon, StarIcon } from "@chakra-ui/icons";

import { Link, useNavigate } from "react-router-dom";
import "./DropDownStyles.scss";
import avatar from "./../../assets/avatar.jpg";


export const DropDown = () => {

  let navigate = useNavigate();

    const { isOpen, onToggle } = useDisclosure();


    //hanlde click on nav item inside dropdown
    const handleClick=(e)=> {
      const navItem = e.target.childNodes[1].data
       if(navItem === "Profile") {
        onToggle()
         navigate("/home")
       } else if (navItem === "My Lists") {
      onToggle()
      navigate("/todo");
       }

    }


  return (
    <>
    <Image
  borderRadius='full'
  boxSize='50px'
  src={avatar}
  alt='User Image'
/>
        <ChevronDownIcon className="header-link-avatar" onClick={onToggle} w={6} h={6} />
        <Fade in={isOpen}>
        <Box className="dropdown-component">
          <List spacing={6}>
            <ListItem className="nav-item" onClick={(e)=>handleClick(e)}>
              <ListIcon as={StarIcon}/>
          Profile
          </ListItem>
          <ListItem className="nav-item" onClick={(e)=>handleClick(e)}>
            <ListIcon as={EditIcon}/>
         My Lists
          </ListItem>
          </List>
        </Box>
        </Fade>
    </>
  );
};
