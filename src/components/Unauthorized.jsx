import React from 'react'
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
    Flex,
    Box,
    Text,
    Heading
} from "@chakra-ui/react"

const Unauthorized = () => {
  return (
    <Flex align="center" justify="center" h="100vh">
      <Box>
        <Heading as="h2" size="xl" mb={4}>
          Unauthorized Access
        </Heading>
        <Text mb={4}>You do not have permission to access this page.</Text>
        <ChakraLink as={Link} to="/" color="blue.500">
          Go back to home
        </ChakraLink>
      </Box>
    </Flex>
  )
}

export default Unauthorized