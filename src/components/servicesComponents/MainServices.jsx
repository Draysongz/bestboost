import React, {useState} from 'react'
import {
    Flex,
    Card,
    CardBody,
    Input,
    TableContainer,
    Td,
    Tr,
    Th,
    Tbody,
    Table,
    Thead,
    InputGroup,
    InputRightAddon
  } from "@chakra-ui/react";
  import {SearchIcon} from '@chakra-ui/icons'
  import { jsonData } from '../jsonData';

const MainServices = () => {
    const [searchQuery, setSearchQuery] = useState('');
  const groupedServices = jsonData.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {});

  const filteredServices = jsonData.filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Flex bgColor={'#f2f7fc'} p={'5'} direction={'column'} w={'100vw'} gap={10} flex="1" overflowY="auto" overflowX={'hidden'}>
        <Card minH={'10vh'} p='5px'>
        <CardBody>
          <InputGroup p='5px'>
            <Input
              type='search'
              variant={'filled'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <InputRightAddon children={<SearchIcon />} />
          </InputGroup>
        </CardBody>
      </Card>

        <Card>
      <CardBody>
        <TableContainer>
          <Table variant="simple" size={'sm'}>
            <Thead borderRadius={'10px'}>
              <Tr bgColor={'#d2e5fa'}>
                <Th>ID</Th>
                <Th>Service</Th>
                <Th>Rate Per 1000</Th>
                <Th>Min order</Th>
                <Th>Max order</Th>
                <Th>Description</Th>
              </Tr>
            </Thead>

            <Tbody>
              {Object.keys(groupedServices).map((category, index) => (
                <React.Fragment key={index}>
                  <Tr>
                    <Th colSpan="6" fontSize={'18px'}>
                      {category}
                    </Th>
                  </Tr>
                  {groupedServices[category].map((service, serviceIndex) => (
                    <Tr key={serviceIndex}>
                      <Td>{service.service}</Td>
                      <Td>{service.name}</Td>
                      <Td>{`NGN ${service.rate}`}</Td>
                      <Td>{service.min}</Td>
                      <Td>{service.max}</Td>
                      <Td>{/* Description */}</Td>
                    </Tr>
                  ))}
                </React.Fragment>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </CardBody>
    </Card>
    </Flex>
  )
}

export default MainServices