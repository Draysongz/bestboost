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

const How = () => {
  return (
    <Flex bgColor={'gray.100'} h={['170vh', '100vh', '80vh', '80vh']} direction={['column']} p={'10'}  alignItems={'center'} gap={6} >
        <Box textAlign={'center'} mt={'2rem'}>
            <Heading color={'#0C315C'}>How does it work?</Heading>
            <Text color={'#0C315C'}>Check out the step-by-step tutorial on how to get started on our SMM panel.</Text>

        </Box>
        <Flex gap={20} direction={['column', 'column', 'row', 'row']}>
        <Box textAlign={'center'}>
            <Center>
            <Circle bgColor={'white'} size={'100px'} fontWeight={'semibold'} color={'#0C315C'} fontSize={'28px'}>1</Circle>
            </Center>  
            <Heading  fontSize={'18px'} color={'#0C315C'}>1. Sign up and log in</Heading>
            <Text color={'#0C315C'}>Creating an account is the first <br/> step, then you need to log in.</Text>      
        </Box>
        <Box>
            <Center>
            <Circle bgColor={'white'} size={'100px'} fontWeight={'semibold'} color={'#0C315C'} fontSize={'28px'}>2</Circle>
            </Center>
            <Heading  fontSize={'18px'} color={'#0C315C'}>2. Funding your wallet</Heading>
            <Text color={'#0C315C'}>Add funds to your account using<br/> your payment method of choice.</Text>   
        </Box>
        <Box>
        <Center>
            <Circle bgColor={'white'} size={'100px'} fontWeight={'semibold'} color={'#0C315C'} fontSize={'28px'}>3</Circle>
        </Center>
        <Heading  fontSize={'18px'} color={'#0C315C'}>3. Choose services</Heading>
            <Text color={'#0C315C'}>Pick SMM services and get ready <br/> to become more popular online.</Text>   
        </Box>
        <Box>
            <Center>
            <Circle bgColor={'white'} size={'100px'} fontWeight={'semibold'} color={'#0C315C'} fontSize={'28px'}>4</Circle>
            </Center>
            <Heading textAlign={'center'} fontSize={'18px'} color={'#0C315C'}>4. Enjoy superb results</Heading>
            <Text color={'#0C315C'} textAlign={'center'}>That's it! You will quickly get the <br/> results that you want.</Text>   
        </Box>
        </Flex>
    </Flex>
  )
}

export default How