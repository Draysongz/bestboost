import React from 'react'
import {
    Flex,
    Text,
    Box,
    Heading,
    Card,
    CardBody,
    Icon,
    SimpleGrid,
} from '@chakra-ui/react'
import waves from './assets/wave.svg'
import {StarIcon} from '@chakra-ui/icons'
import {FaReceipt} from 'react-icons/fa'
import {FaHandsHoldingCircle} from 'react-icons/fa6'
import {GoRocket} from 'react-icons/go'

const Why = () => {
  return (
    <Box bgImage={waves} bgSize={'cover'} bgRepeat={'no-repeat'} minH={'60vh'}>
        <Box textAlign={'center'} color={'white'} bgColor={'purple.500'} p={'20px'}>
        <Heading >Reasons to choose us</Heading>
        <Text>Learn why using our panel is the best & cheapest way to get popular online.</Text>
        </Box>
       
        <SimpleGrid p="10px" spacing={8} minChildWidth="150px" justifyItems='center' alignItems='center'  >
                <Card minH='30vh' maxH={['50vh', '50vh', '50vh']} minW={'15vw'}  >
                    <CardBody p='20px'>
                       <Flex direction={'column'} gap={5}>
                        <Box textAlign={'center'}  rounded={'md'} bg={'blue.100'} w={'15vw'} minH={'10vh'} backdropBlur={'lg'} p={'15px'} >
                        <StarIcon  color={'purple.500'} boxSize={10}/>
                        </Box>
                        <Box>
                            <Heading color={'#0C315C'} fontSize={'18px'}>Top-quality services</Heading>
                        </Box>
                        <Box>
                            <Text color={'#0C315C'}>Enjoy high-quality SMM services<br/> on our panel.</Text>
                        </Box>
                       </Flex>
                    </CardBody>
                </Card>

                <Card minH='30vh' maxH={['50vh', '50vh', '50vh']} minW={'15vw'}  >
                    <CardBody p='20px'>
                       <Flex direction={'column'} gap={5}>
                        <Box textAlign={'center'}  rounded={'md'} bg={'blue.100'} w={'15vw'} minH={'10vh'} backdropBlur={'lg'} p={'15px'} >
                        <Icon as={FaReceipt}  color={'purple.500'} boxSize={10}/>
                        </Box>
                        <Box>
                            <Heading color={'#0C315C'} fontSize={'18px'}>Different payment methods</Heading>
                        </Box>
                        <Box>
                            <Text color={'#0C315C'}>Choose a payment method that <br/>works best for you.</Text>
                        </Box>
                       </Flex>
                    </CardBody>
                </Card>

                <Card minH='30vh' maxH={['50vh', '50vh', '50vh']} minW={'15vw'}  >
                    <CardBody p='20px'>
                       <Flex direction={'column'} gap={5}>
                        <Box textAlign={'center'}  rounded={'md'} bg={'blue.100'} w={'15vw'} minH={'10vh'} backdropBlur={'lg'} p={'15px'} >
                        <Icon as={FaHandsHoldingCircle}  color={'purple.500'} boxSize={10}/>
                        </Box>
                        <Box>
                            <Heading color={'#0C315C'} fontSize={'18px'}>Incredibly cheap</Heading>
                        </Box>
                        <Box>
                            <Text color={'#0C315C'}>SMM services that we provide<br/> are really cheap.</Text>
                        </Box>
                       </Flex>
                    </CardBody>
                </Card>

                <Card minH='30vh' maxH={['50vh', '50vh', '50vh']} minW={'15vw'}  >
                    <CardBody p='20px'>
                       <Flex direction={'column'} gap={5}>
                        <Box textAlign={'center'}  rounded={'md'} bg={'blue.100'} w={'15vw'} minH={'10vh'} backdropBlur={'lg'} p={'15px'} >
                        <Icon as={GoRocket}  color={'purple.500'} boxSize={10}/>
                        </Box>
                        <Box>
                            <Heading color={'#0C315C'} fontSize={'18px'}>Fast Delivery</Heading>
                        </Box>
                        <Box>
                            <Text color={'#0C315C'}>You will be amazed at how <br/>speedy our order delivery is..</Text>
                        </Box>
                       </Flex>
                    </CardBody>
                </Card>
            </SimpleGrid>
    </Box>
  )
}

export default Why