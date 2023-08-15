import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useColorMode,
  Flex,
  IconButton,
  Box,
  Heading,
Spacer,
  Text,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';


const SideNav = () => {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  
    const [display, changeDisplay] = useState("none");
  return (
    <Flex
    color={useColorModeValue("#000", "gray.200")}
    borderRight="1px"
    borderRightColor={useColorModeValue("gray.200", "gray.700")}
    h={[null, null, "130vh"]}
    overflow={'hidden'}
    

  
  >
    <Flex
      flexDir={["row", "row", "column", "column", "column"]}
      // position="fixed"
      top="1rem"
      left="1rem"
      align="center"
      justifyContent={"space-between"}
      bg={'#207dca'}
    

    >
      {/* Desktop */}
      <Flex
        as="nav"
        flexDir={["row", "row", "column", "column", "column"]}
        align={["center", "center", "center", "flex-start", "flex-start"]}
        wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
        justifyContent="center"
        display={["none", "none", "flex", "flex", "flex"]}
        mt={1}
      >
        <Flex
          mt={10}
          cursor={"pointer"}
          flexDir={["row", "row", "column", "column", "column"]}
          align={["center", "center", "center", "flex-start", "flex-start"]}
          wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
          justifyContent="center"
          p="2"
          mx="4"
        gap={7}
   

        >
          <Link to='/dashboard'
          >
            <Text
               padding="10px"
               borderRadius="2xl"
               display={["none", "none", "flex", "flex", "flex"]}
               width={'15vw'}
              fontSize="lg"
              fontWeight={'500'}
              className="active"
              color={'white'}
              _hover={{
                bg: "white",
                color: '#207dca',
              }}
            >
              New order
            </Text>
          </Link>

          <Link to='/services'
          >
            <Text
               padding="10px"
               borderRadius="2xl"
               display={["none", "none", "flex", "flex", "flex"]}
               width={'15vw'}
              fontSize="lg"
              fontWeight={'500'}
              className="active"
              color={'white'}
              _hover={{
                bg: "white",
                color: '#207dca',
              }}
            >
              Services
            </Text>
          </Link>
          <Link to='/orders'
          >
            <Text
               padding="10px"
               borderRadius="2xl"
               display={["none", "none", "flex", "flex", "flex"]}
               width={'15vw'}
              fontSize="lg"
              fontWeight={'500'}
              className="active"
              color={'white'}
              _hover={{
                bg: "white",
                color: '#207dca',
              }}
            >
              Orders
            </Text>
          </Link>

          <Link to='/addFunds'
          >
            <Text
               padding="10px"
               borderRadius="2xl"
               display={["none", "none", "flex", "flex", "flex"]}
               width={'15vw'}
              fontSize="lg"
              fontWeight={'500'}
              className="active"
              color={'white'}
              _hover={{
                bg: "white",
                color: '#207dca',
              }}
            >
              Add funds
            </Text>
          </Link>

          <Link
          >
            <Text
               padding="10px"
               borderRadius="2xl"
               display={["none", "none", "flex", "flex", "flex"]}
               width={'15vw'}
              fontSize="lg"
              fontWeight={'500'}
              className="active"
              color={'white'}
              _hover={{
                bg: "white",
                color: '#207dca',
              }}
            >
              Mass order
            </Text>
          </Link>

  

         
        </Flex>
      </Flex>

      <Flex
        alignItems="center"
        ml={{ base: 0 }}
        px={{ base: 5 }}
        borderBottom="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        flexWrap="unset"
        bgColor={'purple.500'}
        width={['100vw', '100vw', '15vw', '15vw']}
      >
        {/* Mobile */}
        <Box display={['block', 'block', 'none', 'none']}>
              <Heading color='white'>BestBoost</Heading>
            </Box>
            <Spacer/>
        <IconButton
          justifySelf={"flex-end"}
          aria-label="Open Menu"
          size="lg"
          ml={{ base: "8em", sm: "18em", md: "30em" }}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>
    </Flex>

    {/* Mobile Content */}

    <Flex
      w={['75vw', '75vw', "50vw"]}
      display={display}
      bgColor="#207dca"
      color="white"
      zIndex={20}
      h="100vh"
      pos="fixed"
      top="0"
      left="0"
      overflowY="auto"
      flexDir="column"
    >
      <Flex justify="flex-end">
        <IconButton
          mt={2}
          mr={2}
          aria-label="Open Menu"
          size="lg"
          icon={<CloseIcon />}
          onClick={() => changeDisplay("none")}
        />{" "}
      </Flex>

      <Flex
        flexDir="column"
        align="left"
        justifyContent={"space-between"}
        borderRadius="xl"
        p="2"
        mx="4"
      >
       <Link to='/dashboard'
          >
            <Text border={'1px solid red'}
               padding="10px"
               borderRadius="2xl"
               display={["flex", "flex", "flex", "none", "none"]}
               width={['45vw', '45vw', '15vw']}
              fontSize="lg"
              fontWeight={'500'}
              className="active"
              color={'white'}
              _hover={{
                bg: "white",
                color: '#207dca',
              }}
            >
              New order
            </Text>
          </Link>

          <Link to='/services'
          >
            <Text
               padding="10px"
               borderRadius="2xl"
               width={['45vw', '45vw', '15vw']}
              fontSize="lg"
              fontWeight={'500'}
              className="active"
              color={'white'}
              _hover={{
                bg: "white",
                color: '#207dca',
              }}
            >
              Services
            </Text>
          </Link>
          <Link to='/orders'
          >
            <Text
               padding="10px"
               borderRadius="2xl"
               width={['45vw', '45vw', '15vw']}
              fontSize="lg"
              fontWeight={'500'}
              className="active"
              color={'white'}
              _hover={{
                bg: "white",
                color: '#207dca',
              }}
            >
              Orders
            </Text>
          </Link>

          <Link to='/addFunds'
          >
            <Text
               padding="10px"
               borderRadius="2xl"
               width={['45vw', '45vw', '15vw']}
              fontSize="lg"
              fontWeight={'500'}
              className="active"
              color={'white'}
              _hover={{
                bg: "white",
                color: '#207dca',
              }}
            >
              Add funds
            </Text>
          </Link>

          <Link
          >
            <Text
               padding="10px"
               borderRadius="2xl"
               width={['45vw', '45vw', '15vw']}
              fontSize="lg"
              fontWeight={'500'}
              className="active"
              color={'white'}
              _hover={{
                bg: "white",
                color: '#207dca',
              }}
            >
              Mass order
            </Text>
          </Link>


      </Flex>
    </Flex>
  </Flex>
  )
}

export default SideNav