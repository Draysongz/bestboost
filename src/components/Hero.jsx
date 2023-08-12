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
    Center
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Flex p={['5', '10', '20','20']} direction={['column', 'column', 'row', 'row']} gap={'20'}>
        {/* left-side */}
        <Box>
            <Heading color={'#0C315C'} fontSize={'42px'} textTransform={'uppercase'}>The Best Smm panel in  <br/> Nigeria</Heading>
            <Text color={'#0C315C'} w={['75vw', '70vw', '50vw', '50vw']}>Bestboost is a Cheap SMM  and SEO service Provider and Reseller Website.Fast, Reliable and Secure, offering World's Best Quality and Cheapest Automatic Social Media Services which are specially developed for Resellers.</Text>
        </Box>



        {/* right-side-form */}
        <Box >
            <Card w={['80vw', '55vw', '32vw', '32vw']} bgColor={'purple.500'} color={'white'} h={'40vh'}>
                <CardBody>
                    <FormControl p={['0','0', '2', '2']}>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' />
                        <FormLabel>Password</FormLabel>
                        <Input type='password' />
                        <Center mt={'4'}>
                        <Button w={'28vw'} background={'purple.400'} color={'white'} mt={'2'} >Login</Button>
                       
                        </Center>
                        <Center>
                        <HStack>
                        <Text>Don't have an account?</Text>
                        <Link to='#'><Text>Sign up</Text></Link>
                        </HStack>
                        </Center>
                    </FormControl>
                </CardBody>
            </Card>
        </Box>
    </Flex>
  )
}

export default Hero