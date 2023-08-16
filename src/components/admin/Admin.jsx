import React, {useState, useEffect}  from 'react'
import { Flex, Spinner} from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { app } from '../firebase/Firebase';
import { Link } from 'react-router-dom';
import {
    Box,
    Spacer,
    Heading,
    Card,
    CardBody,
    Menu,
    MenuItem,
    Button,
    MenuButton,
    MenuList,
    Text
  } from '@chakra-ui/react';
  import { ChevronDownIcon } from '@chakra-ui/icons';
  import MainAdmin from './MainAdmin';
  import AdminSideNav from './AdminSideNav';

const Admin = () => {
    const navigate = useNavigate();
    const [userdata, setUserdata] = useState(null); // Change initial state to null
  
    useEffect(() => {
      const auth = getAuth();
  
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user.uid);
          const db = getFirestore(app);
          const docRef = doc(db, 'users', user.uid);
          getDoc(docRef)
            .then((docSnap) => {
              if (docSnap.exists()) {
                const userData = docSnap.data();
                console.log('User data:', userData);
                setUserdata(userData);
              } else {
                console.log('User document not found.');
              }
            })
            .catch((error) => {
              console.error('Error fetching user data:', error.message);
            });
        } else {
          setUserdata(null); // Set userdata to null when the user is not logged in
          toast.error('please login');
          navigate('/');
        }
      });
  
      return () => unsubscribe();
    }, [navigate]);
  
    // Show the spinner while waiting for the authentication check
    if (userdata === null) {
      return (
        <Flex align="center" justify="center" height="100vh">
          <Spinner size="xl" color="blue.500" thickness='4px'
    speed='0.65s'
    emptyColor='gray.200' />
        </Flex>
      );
    }
  return (
    <Flex direction={'column'}>
    <Flex>
      <Card width={'100vw'} h={'9vh'} display={{base: 'none', md : 'block'}}>
        <CardBody>
          <Flex>
          <Box>
            <Heading color='gray.500'>BestBoost</Heading>
          </Box>
          <Spacer/>

          <Box>
            <Flex alignItems={'center'} gap={'10'}>
            <Menu>
<MenuButton bgColor={'purple.500'} color={'white'} as={Button} rightIcon={<ChevronDownIcon />}>
  NGN 0.00
</MenuButton>
<MenuList>
  <MenuItem>USD $</MenuItem>
  <MenuItem>EUR €</MenuItem>
</MenuList>
</Menu>

<Link to='/account'><Text fontSize={'18px'} color={'gray.500'}>Account</Text></Link>
<Link to='#'><Text fontSize={'18px'} color={'gray.500'}>Logout</Text></Link>
            </Flex>
         
          </Box>
          </Flex>
        </CardBody>
      </Card>

      <Box></Box>
      <Spacer/>
    </Flex>
  <Flex direction={["column", "column", "row"]} >
    <AdminSideNav/>
    <MainAdmin userData={userdata}/>
  </Flex>
  </Flex>
  )
}

export default Admin