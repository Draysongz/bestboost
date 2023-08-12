import React, { useState, useEffect } from 'react';
import { jsonData } from './jsonData';
import {
  Flex,
  Spinner,
  Button,
  Table,
  Th,
  Thead,
  Tbody,
  Td,
  Tr,
  TableContainer,
  useDisclosure,
  Modal,
  ModalBody,
  FormControl,
  Input,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  FormLabel,
  ModalFooter,
} from '@chakra-ui/react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { app } from './firebase/Firebase';
import WithSubnavigation from './Nav';
import PaystackPop from '@paystack/inline-js'

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [amount, setAmount]= useState(null)
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState(null);
  const [email,setEmail] = useState('')


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
              setEmail(user.email); 
            } else {
              console.log('User document not found.');
            }
          })
          .catch((error) => {
            console.error('Error fetching user data:', error.message);
          });
      } else {
        setUserdata(null);
        toast.error('please login');
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  if (userdata === null) {
    return (
      <Flex align="center" justify="center" height="100vh">
        <Spinner size="xl" color="blue.500" thickness="4px" speed="0.65s" emptyColor="gray.200" />
      </Flex>
    );
  }

  const mainAMount = amount/1000
  function payWithPaystack(e) {
    e.preventDefault();
    
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key:"pk_test_6f5223ed2ae2c4ceea9a6ef1b7def264c476051a",
      amount: mainAMount *selectedService.rate * 100,
      email,
         onSuccess(transaction){
        let message= `Payment Successful! ${transaction.reference}`
        alert(message)
        toast.success('message')
        toast(amount)
        setEmail('')
        setAmount('')
      },
      onCancel(){
        alert('Transaction canceled')
      }

    })

  }
  // Modal state for selected service
 

  return (
    <Flex direction={'column'}>
      <WithSubnavigation />
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Services</Th>
              <Th>Rate per 1000</Th>
              <Th>Min order</Th>
              <Th>Max order</Th>
              <Th>Process</Th>
            </Tr>
          </Thead>
          <Tbody>
            {jsonData.map((service, index) => (
              <Tr key={service.service}>
                <Td>{service.service}</Td>
                <Td>{service.name}</Td>
                <Td isNumeric>{service.rate}</Td>
                <Td>{service.min}</Td>
                <Td>{service.max}</Td>
                <Td>
                  <Button onClick={() => {
                    setSelectedService(service);
                    onOpen();
                  }}>
                    order
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedService ? selectedService.name : 'Service Details'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {selectedService && (
              <>
                <FormControl>
                  <FormLabel>Service ID: {selectedService.service}</FormLabel>
                  <FormLabel>Rate per 1000: {selectedService.rate}</FormLabel>
                  <FormLabel>Amount</FormLabel>
                  <Input required onChange={(e)=> setAmount(e.target.value)} value={amount} type='number' placeholder='enter how many followers in tunes of 1k'/>
                  {/* Add more service details here */}
                </FormControl>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}onClick={payWithPaystack}>
              Order
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Dashboard;
