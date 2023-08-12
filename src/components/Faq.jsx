import React from 'react'
import {
  Flex,
  Box,
  Heading,
  Circle,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const Faq = () => {
  return (
    <Flex bgColor={'white'} h={['80vh', '100vh', '60vh', '100vh']} direction={['column']} alignItems={'center'}>
        <Heading mt={'5rem'}
                    color={'#0C315C'}
                    fontSize={['19px', '32px', '42px']}
                    textAlign={['center', 'center', 'center', 'left']}
                    >Most Asked Questions</Heading>
                    <Text fontWeight={'500'} color={'#0C315C'} textAlign={'center'}>Our staff chose some of the most popular questions about SMM panels and replied to them.

</Text>
            <Accordion  allowToggle display={'flex'} flexDir={'column'} gap={3} mt={'20px'}>
            <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'} >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif'>
                        <AccordionButton>
                        <Box as="span" flex='1'  fontSize={['18px', '18px', '20px', '24px']} textAlign='left'>
                        What are SMM panels?
                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    SMM panel is an online shop that people visit to buy different SMM services.
    </AccordionPanel>
                    </>
                )}
                </AccordionItem>
               
               
                <AccordionItem p={['1px', '5px', '7px']}border='1px solid'  borderRadius={'10px'}  >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif' fontWeight={'bold'}>
                        <AccordionButton>
                        <Box as="span" flex='1'  fontSize={['18px', '18px', '20px', '24px']}textAlign='left'>
                        What SMM services can I purchase here?

                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    On our panel you can find different types of SMM services, such as views, followers, likes, etc.
    </AccordionPanel>

    
                    </>
                )}
                </AccordionItem>

                <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'}  >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif' fontWeight={'bold'}>
                        <AccordionButton>
                        <Box as="span" flex='1' fontSize={['18px', '18px', '20px', '24px']} textAlign='left'>
                        Are your SMM services safe to use?

                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    100%! Your accounts won't get banned.

    </AccordionPanel>

    
                    </>
                )}
                </AccordionItem>

                <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'}  >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif' fontWeight={'bold'}>
                        <AccordionButton>
                        <Box as="span" flex='1'  fontSize={['18px', '18px', '20px', '24px']}textAlign='left'>
                        What is a mass order?


                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    The mass order feature really helps save time when you have many orders. With its help, you can place several orders with different links at once.

    </AccordionPanel>

    
                    </>
                )}
                </AccordionItem>

                
                <AccordionItem p={['1px', '5px', '7px']} border='1px solid'  borderRadius={'10px'}  >
                {({ isExpanded }) => (
                    <>
                    <Heading fontFamily='Lato sans-serif' fontWeight={'bold'}>
                        <AccordionButton>
                        <Box as="span" flex='1' fontSize={['18px', '18px', '20px', '24px']} textAlign='left'>
                        Drip-feed — what does it mean?
                            </Box>
                            {isExpanded ? (
                                <Circle  size={['25px', '30px', '40px']} border={'1px solid'}>
              <MinusIcon fontSize='12px' />
              </Circle>
            ) : (
                <Circle size={['25px', '30px', '40px']} border={'1px solid'}>
              <AddIcon fontSize='12px' />
              </Circle>
            )}
                        </AccordionButton>

                    </Heading>
                    <AccordionPanel pb={4}>
                    Drip-feed is a feature that helps build the engagement on your account at the preferred speed. It means that you can get the quantity of items you ordered gradually instead of everything at once. For example, if you order 2000 likes, you can get 200 per day for 10 days instead of all 2000 right away.

    </AccordionPanel>
    </>
                )}
                </AccordionItem>
            </Accordion>

    
    </Flex>
  )
}

export default Faq