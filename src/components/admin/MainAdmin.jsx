import React, { useEffect, useState } from "react";
import {
  Flex,
  SimpleGrid,
  Card,
  CardBody,
  Box,
  Text,
  Button,
  Icon,
  FormControl,
  Input,
  FormLabel,
  Select,
  Heading,
  Table, Thead, Tbody, Tr, Th, Td
} from "@chakra-ui/react";
import {FiMenu} from 'react-icons/fi'
import {MdReceipt} from 'react-icons/md'
import {GoPeople} from 'react-icons/go'
import {GoChecklist} from 'react-icons/go'
import { app } from "../firebase/Firebase";
import { getAuth } from "firebase/auth";
import {toast} from 'react-toastify'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";


const MainAdmin = ({userData}) => {
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalAmountPaid, setTotalAmountPaid] = useState(0);
    const [orders, setOrders]= useState([])

    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {

            const isAdmin = userData.roles && userData.roles.includes("admin");

  if (!isAdmin) {
    navigate('/unauthorized')
  }
          const db = getFirestore(app);
    
          // Fetch data for total orders
          const ordersCollectionRef = collection(db, "orders");
          const ordersSnapshot = await getDocs(ordersCollectionRef);
          const ordersData = ordersSnapshot.docs.map((doc) => doc.data());
          setOrders(ordersData);
          setTotalOrders(ordersSnapshot.size);
    
          // Fetch data for total users
          const usersCollectionRef = collection(db, "users");
          const usersSnapshot = await getDocs(usersCollectionRef);
          setTotalUsers(usersSnapshot.size);
    
          // Fetch data for total amount paid for orders
          // You need to adapt this according to your Firestore structure
          const amountPaidSnapshot = await getDocs(collection(db, "orders"));
          const amountPaidData = amountPaidSnapshot.docs.map((doc) => doc.data().amountPaid);
          const totalAmount = amountPaidData.reduce((acc, amount) => acc + amount, 0);
          setTotalAmountPaid(totalAmount);
        }
    
        fetchData();
      }, []);
  return (
    <Flex p={'5'} direction={'column'} w={'100vw'} flex="1" overflowY="auto" overflowX={'hidden'}>
    <SimpleGrid p="10px" spacing={10} minChildWidth="200px" w={'80vw'}>
        <Card h={'17vh'} w={['83vw', '60vw', '38vw']} >
            <CardBody >
                <Flex gap={10}>
                <Box textAlign={'center'}  rounded={'md'} bg={'blue.100'} w={['16vw', '70vw', '7vw']} h={['10vh', '5vh', '10vh']} backdropBlur={'lg'} p={'15px'} >
                <Icon as={FiMenu}  color={'purple.500'} boxSize={10}/>
                </Box>
                <Box>
                    <Heading color={'#207dca'}>{userData.firstName}</Heading>
                    <Text fontWeight={'medium'} mt='1rem'>Welcome to Bestboost</Text>
                </Box>
                </Flex>
            </CardBody>
        </Card>

        <Card h={'17vh'} w={['83vw', '60vw', '38vw']}  >
            <CardBody >
                <Flex gap={10}>
                <Box textAlign={'center'}  rounded={'md'} bg={'blue.100'} w={['16vw', '70vw', '7vw']} h={['10vh', '5vh', '10vh']} backdropBlur={'lg'} p={'15px'} >
                <Icon as={MdReceipt}  color={'purple.500'} boxSize={10}/>
                </Box>
                <Box>
                    <Heading color={'#207dca'}>{totalOrders}</Heading>
                    <Text fontWeight={'medium'} mt='1rem'>Total orders</Text>
                </Box>
                </Flex>
            </CardBody>
        </Card>

        
    </SimpleGrid>

    <SimpleGrid p="10px" spacing={10} minChildWidth="200px" w={'80vw'}>
        <Card h={'17vh'} w={['83vw', '60vw', '38vw']}  >
            <CardBody >
                <Flex gap={10}>
                <Box textAlign={'center'}  rounded={'md'} bg={'blue.100'} w={['16vw', '70vw', '7vw']} h={['10vh', '5vh', '10vh']} backdropBlur={'lg'} p={'15px'} >
                <Icon as={GoPeople}  color={'purple.500'} boxSize={10}/>
                </Box>
                <Box>
                    <Heading color={'#207dca'}>{totalUsers}</Heading>
                    <Text fontWeight={'medium'} mt='1rem'>Total Users</Text>
                </Box>
                </Flex>
            </CardBody>
        </Card>

        <Card h={'17vh'} w={['83vw', '60vw', '38vw']}  >
            <CardBody >
                <Flex gap={10}>
                <Box textAlign={'center'}  rounded={'md'} bg={'blue.100'} w={['16vw', '70vw', '7vw']} h={['10vh', '5vh', '10vh']} backdropBlur={'lg'} p={'15px'} >
                <Icon as={GoChecklist}  color={'purple.500'} boxSize={10}/>
                </Box>
                <Box>
                    <Heading color={'#207dca'}>{`NGN ${totalAmountPaid}`}</Heading>
                    <Text fontWeight={'medium'} mt='1rem'>Amount Paid for orders</Text>
                </Box>
                </Flex>
            </CardBody>
        </Card>
        
    </SimpleGrid>

    <Table variant="striped" colorScheme="gray">
  <Thead>
    <Tr>
      <Th>Order ID</Th>
      <Th>Service</Th>
      <Th>Quantity</Th>
      <Th>Amount Paid</Th>
      <Th>Link</Th>
      {/* Add more columns as needed */}
    </Tr>
  </Thead>
  <Tbody>
    {orders.map((order, index) => (
      <Tr key={index}>
        <Td>{index + 1}</Td> {/* You can use a unique ID if available */}
        <Td>{order.service}</Td>
        <Td>{order.quantity}</Td>
        <Td>NGN {order.amountPaid.toFixed(2)}</Td>
        <Td>{order.link}</Td>
        {/* Add more cells as needed */}
      </Tr>
    ))}
  </Tbody>
</Table>

    </Flex>
  )
}

export default MainAdmin