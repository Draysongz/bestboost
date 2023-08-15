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
  Heading
} from "@chakra-ui/react";
import {FiMenu} from 'react-icons/fi'
import {MdReceipt} from 'react-icons/md'
import {GoPeople} from 'react-icons/go'
import {GoChecklist} from 'react-icons/go'
import { jsonData } from "../jsonData";

const Maindash = ({userData}) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedItem, setSelectedItem] = useState("");
    const [quantity, setQuantity] = useState("");
    const uniqueCategories = Array.from(
      new Set(jsonData.map((item) => item.category))
    );
  
    const filteredItems = jsonData.filter(
      (item) => item.category === selectedCategory
    );
  
    const selectedItemData = jsonData.find((item) => item.service === selectedItem);
  
    const calculateCharge = () => {
        console.log("selectedItemData:", selectedItemData);
        console.log("quantity:", quantity);
      
        if (selectedItemData && quantity) {
          return (parseFloat(selectedItemData.rate) * parseInt(quantity)).toFixed(2);
        }
        return "";
      };
      
  
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
                        <Heading color={'#207dca'}>NGN 0.00</Heading>
                        <Text fontWeight={'medium'} mt='1rem'>Total spent</Text>
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
                        <Heading color={'#207dca'}>3243</Heading>
                        <Text fontWeight={'medium'} mt='1rem'>Total spent</Text>
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
                        <Heading color={'#207dca'}>NGN 0.00</Heading>
                        <Text fontWeight={'medium'} mt='1rem'>Account balance</Text>
                    </Box>
                    </Flex>
                </CardBody>
            </Card>

            
        </SimpleGrid>

      <Flex mt={'4rem'} p={'10px'} gap={10} direction={['column', 'column', 'row', "row"]}>
            <Card w={['83vw', '83vw', '45vw']} h={['85vh', '85vh', '70vh']} >
                <CardBody>
                <FormControl>
  <FormLabel>Category</FormLabel>
  <Select variant={'filled'} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
    <option value="">Select an option</option>
    {uniqueCategories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ))}
  </Select>

  <FormLabel>Service</FormLabel>
  <Box>
    <Select variant="filled">
      <option value="">Select an item</option>
      {filteredItems.map((item, index) => (
        <option key={index} value={item.service}>
          {item.name} - NGN {item.rate}
        </option>
      ))}
    </Select>
  </Box>

  <FormLabel>Description</FormLabel>
  <Input variant={'filled'} type='text' value={'ADMIN NOTE | Low drop high quality accounts. No overdelivery'} disabled/>

  <FormLabel>Link</FormLabel>
  <Input type="text"  variant='filled'/>

  
  <FormLabel>Quantity</FormLabel>
              <Input
                type="text"
                variant='filled'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              {selectedItemData && (
                <Text>Min: {selectedItemData.min} - Max: {selectedItemData.max}</Text>
              )}

              <FormLabel>Charge</FormLabel>
              <Input
                type='text'
                variant='filled'
                disabled
                value={`NGN ${calculateCharge()}`}
              />


              <Button color={'white'} mt={'1rem'} w={['70vw', '70vw', '34vw']} bgColor={'purple.500'}>Submit</Button>
            </FormControl>


                </CardBody>
            </Card>

            <Card h={'60vh'}>
                <CardBody>
                    <Text>Need to make your online presence noticeable?</Text>
                    <Text>We can help you with that! You can achieve great exposure <br/> online using our automated services we offer on our panel.<br/>

All you have to do is to place an order, and everything will be 
 done for you. <br/> We accept different payment methods to make <br/>adding funds to your account super convenient.</Text>
                </CardBody>
            </Card>
        </Flex>
        
    </Flex>
  )
}

export default Maindash