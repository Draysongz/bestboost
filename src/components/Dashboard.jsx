import React,{useState, useEffect} from 'react'
import { jsonData } from './jsonData'
import { Flex, Heading, Text, Box, Card, CardBody,Spinner } from '@chakra-ui/react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { app } from "./firebase/Firebase";


const Dashboard = () => {
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
          navigate('/login');
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
    <Flex direction={'column'} >
        <Flex >
        <Card p={2} bgColor={'purple.500'} color={'white'} w={'100vw'}>
            <CardBody>
            <Heading>Hi {userdata.firstName},welcome</Heading>    
            </CardBody>
        </Card>
        </Flex>
        {jsonData.map((service, index)=>{
            return(
                <Flex key={index} direction={'column'} gap={4}>
                    <Card>
                        <CardBody>
                    <Heading> Service: {service.service}</Heading>
                    <Text>Category: {service.category}</Text>
                    <Text>Type: {service.type}</Text>
                    <Text> Name: {service.name}</Text>
                    <Text> Rate(NGN):{service.rate}</Text>
                    <Text>Refill: {service.refill}</Text>
                    <Text>Min-order:{service.min}</Text>
                    <Text>Max-order: {service.max}</Text>
                    </CardBody>
                    </Card>
                </Flex>
            )
        })}
    </Flex>
  )
}

export default Dashboard