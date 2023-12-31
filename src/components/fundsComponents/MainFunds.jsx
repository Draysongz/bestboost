import React, { useState, useEffect } from 'react'
import {
    Flex,
    Card,
    CardBody,
    Text,
    Button,
    FormControl,
    Input,
    FormLabel,
    Select,
    TableContainer,
    Td,
    Tr,
    Th,
    Tbody,
    Table,
    Thead
  } from "@chakra-ui/react";
  import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
  import { getFirestore, updateDoc,collection, addDoc, Timestamp,query, where, getDoc,doc, onSnapshot  } from 'firebase/firestore';
  import { getAuth } from 'firebase/auth';
  import { app } from '../firebase/Firebase';

const MainFunds = ({userData}) => {
    const [amount, setAmount] = useState('')
    const email = userData.Email
    console.log(email);

    const db = getFirestore(app)
    const auth = getAuth()
    const user= auth.currentUser


    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        if (userData && user.uid) {
          const userUid = user.uid;
      
          const transactionsCollection = collection(db, 'transactions');
          const userQuery = query(transactionsCollection, where('userId', '==', userUid));
      
          // Rest of the code for fetching and updating transactions
          const unsubscribe = onSnapshot(userQuery, (snapshot) => {
            const updatedTransactions = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setTransactions(updatedTransactions);
          });
    
          return () => {
            unsubscribe();
          };
        }
        
        
      }, [db, userData, user.uid]);
      

    const config = {
      
        public_key: 'FLWPUBK-01b9c278a0abcce778d83175bd2df114-X',
        tx_ref: Date.now(),
        amount: amount,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: email,
           phone_number: userData.Number,
          name: `${userData.firstName} ${userData.lastName}`,
        },
        customizations: {
          title: 'Fund Bestboost Account',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
     
      const handleFlutterPayment = useFlutterwave(config);
      const timestamp= Timestamp.now()

      const createTransaction = async (transactionId) => {
        console.log('userId:', user.uid);
        console.log('amount:', amount);
      
        try {
          await addDoc(collection(db, 'transactions'), {
            userId: user.uid,
            amount: parseFloat(amount),
            status: 'completed',
            transactionId: transactionId,
            createdAt: timestamp,
          });
        } catch (error) {
          console.error('Error creating transaction:', error);
        }
      };
      const updateBalance = async () => {
        const userDocRef = doc(db, 'users', user.uid);
        console.log('Updating balance for user:', user.uid);
      
        try {
          const userDocSnapshot = await getDoc(userDocRef);
      
          if (userDocSnapshot.exists()) {
            const currentBalance = userDocSnapshot.data().balance;
            const newBalance = currentBalance + parseFloat(amount);
      
            await updateDoc(userDocRef, { balance: newBalance });
            console.log('Balance updated successfully');
          } else {
            console.log('No user document found');
          }
        } catch (error) {
          console.error('Error updating user balance:', error);
        }
      };
      
      
  return (
    <Flex bgColor={'#f2f7fc'} p={'5'} direction={'column'} w={'100vw'} gap={10} flex="1" overflowY="auto" overflowX={'hidden'}>
        <Card minH={'10vh'} p='5px'>
            <CardBody>
              <Flex gap={7} direction={'column'} >
              <Text color={'#0C315C'}>IMPORTANT | Make sure to click pay to get a new account number each time you want to fund your wallet.</Text>
                <Text color={'#0C315C'}>Make sure to pay in the exact amount inputted.</Text>
              </Flex>
            </CardBody>
        </Card>

        <Card minH={'40vh'} p='5px'>
            <CardBody>
                <FormControl>
                <Flex gap={3} direction={'column'} >
                    <FormLabel>Method</FormLabel>
                    <Select variant={'filled'} >
                        <option p='3px' value="Flutterwave{Bank Transfer, Card, USSD}">{`Flutterwave{Bank Transfer, Card, USSD}`}</option>
                    </Select>
                    <FormLabel>Amount</FormLabel>
                    <Input onChange={(e)=>setAmount(e.target.value)} value={amount} type='number' variant={'filled'} />
                    <Button onClick={() => {
                handleFlutterPayment({
                  callback: (response) => {
                    console.log(response);
                    closePaymentModal(); // Close the payment modal programmatically
                    if (response.status === 'completed') {
                      createTransaction(response.transaction_id); // Save the transaction to Firestore
                      updateBalance(); // Update user balance in Firestore
                    }
                  },
                  onClose: () => {},
                });
              }}  color={'white'} mt={'1rem'} w={['70vw', '70vw', '75vw']} bgColor={'purple.500'}>Pay</Button>
                    </Flex>
                </FormControl>
           
            </CardBody>
        </Card>

          <Card>
      <CardBody>
        <TableContainer>
          <Table variant='simple'>
            <Thead borderRadius={'10px'}>
              <Tr bgColor={'#d2e5fa'}>
                <Th>ID</Th>
                <Th>Date</Th>
                <Th>Method</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{transaction.id}</Td>
                  <Td>{transaction.createdAt.toDate().toLocaleDateString()}</Td>
                  <Td>Flutterwave</Td>
                  <Td>₦{transaction.amount.toFixed(2)}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
    </Flex>
  )
}

export default MainFunds