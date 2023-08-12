import React from 'react'
import {
    Flex,
    Text,
    Spacer,
    Box,
    Heading,
    Card,
    CardBody,
    HStack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
    Circle
} from '@chakra-ui/react'


const Footer = () => {
  return (
    <Flex justifyContent={'center'} bgColor={'#000'} p={'6'} color={'white'}>
        <Text>© Copyright Bestboost. All Rights Reserved.</Text>
    </Flex>
  )
}

export default Footer