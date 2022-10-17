import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  Stack,
} from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'
import img from '../public/mylogo.png'
import NextLink from 'next/link'
import { HamburgerIcon, MenuIcon, CloseIcon } from '@chakra-ui/icons'

const Header = () => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)
  return (
    <Flex w="100%" 
     color="black"
    //  justifyContent="space-around"
    justify={["space-between","space-around","space-around"]}
    wrap="wrap"
    mb={8}
    p={8}
    >
      {/* <Container >
        <Box display={['flex',]} justifyContent='space-between'> */}
     <Box>

        <Image src={img} width="65px" height="55px" alt="Segun Adebayo" />
     </Box>
      <Box display={['flex','flex','flex']} gap={48}>
        
          <IconButton
             onClick={toggleMenu}
            aria-label="Open Menu"
            size="lg"
            icon={show ? <CloseIcon /> : <HamburgerIcon />}
           
            display={{ base: "block", md: "none" }}
          />
        
      </Box>
      {/* </Box>
      </Container>
       */}

      <Box
        fontWeight="800"
        display={{ base: show ? 'block' : 'none', md: 'block' }}
      >
        <Stack
          marginTop={['50px', '10px', '10px']}
          marginLeft={['56px', '10px', '10px']}
          gap={8}
          textAlign="center"
          alignItems="center"
          direction={['column', 'row', 'row']}
          >
          
          <NextLink colorScheme="teal" href="/How it Works">
            How it Works
          </NextLink>
          <NextLink colorScheme="teal" href="/Crypto">
            Crypto
          </NextLink>
          <NextLink colorScheme="teal" href="/Marketplace">
            Marketplace
          </NextLink>
          <NextLink colorScheme="teal" href="/Sign In" passHref>
            Sign In
          </NextLink>
          <Button
            bg="black"
            color="white"
            px="12"
            variant="outline"
            borderColor="black.500"
            _hover={{ bg: 'white', color: 'black' }}
          >
            <NextLink href="/Marketplace">Get Started</NextLink>
          </Button>
          
        </Stack>
      </Box>
    </Flex>
  )
}

export default Header
