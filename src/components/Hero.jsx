import React, {useState, useEffect} from 'react'
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
import { app } from "./firebase/Firebase";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Hero = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const loginUser = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      const auth = getAuth(app);
      try {
        await setTimeout(() => {
          setIsLoading(false);
        }, 3000);
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredentials.user;
        console.log(user);
        toast.success("login successful");
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        await setTimeout(() => {
          setIsLoading(false);
        }, 4000);
        toast.error(error.message);
      }
    };

    const apiKey = '65722dfe4f9007abf82b0dff7a5bffdd';
    const apiUrl = '/proxy/api/v2';
    const action = 'services';
  
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
  
    const handleApiRequest = async () => {
      try {
        const response = await axios.post(apiUrl, {
          key: apiKey,
          action: action,
        });
        setResponse(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    useEffect(()=>{
        handleApiRequest()
    }, [])
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
                        <FormLabel>Email Address</FormLabel>
                        <Input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} />
                        <FormLabel>Password</FormLabel>
                        <Input type='password'value={password} onChange={(e)=> setPassword(e.target.value)} />
                        <Center mt={'4'}>
                        <Button w={'28vw'} background={'purple.400'} color={'white'} mt={'2'} isLoading={isLoading}
                  onClick={loginUser}
                  loadingText="Logging in">Login</Button>
                       
                        </Center>
                        <Center>
                        <HStack>
                        <Text>Don't have an account?</Text>
                        <Link to='/register'><Text>Sign up</Text></Link>
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