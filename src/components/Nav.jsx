import React from 'react'
import {
    Flex,
    Text,
    Spacer,
    Box,
    Heading,
    Card,
    CardBody,
    HStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <Flex p={'.5'}>
        <Card w={'100vw'}>
            <CardBody>
                <Flex>
                <Box ml={['0', '0', '7rem', '7rem']}>
            <Heading fontSize={'32px'} color={'gray.500'} textTransform={'uppercase'}>BestBoost</Heading>
        </Box>

        <Spacer/>
        <HStack  w={'30vw'} spacing={'35px'} color={'gray.500'}>
           <Link to='#'><Text fontSize={'18px'} color={'blue.500'}>Sign in</Text></Link>
            <Link to='#'><Text fontSize={'18px'}>Services</Text></Link>
            <Link to='#'><Text fontSize={'18px'}>API</Text></Link>
            <Link to='#'><Text fontSize={'18px'}>Sign up</Text></Link>
        </HStack>

                </Flex>
            </CardBody>
        </Card>
       
    </Flex>
  )
}

export default Nav