import React from 'react'

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Img,
  Text,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerBody,
} from '@chakra-ui/react'
import { HamburgerIcon, MenuIcon, CloseIcon } from '@chakra-ui/icons'

import Image from 'next/image'
import img from '../public/mylogo.png'
import NextLink from 'next/link'

const Navbar = () => {
  const [show, setShow] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const toggleMenu = () => setShow(!show)
  return (
    <Flex
      mx={['4px', '230px', '230px']}
      flexDirection={['row', 'row', 'row']}
      alignItems={['left', 'center', 'center']}
      gap="2"
      h={['80px', '60px', '60px']}
      color="black"
      justifyContent="space-between"
      fontSize={['18px', '15px', '16px']}
      fontWeight="500"
      my="8"
    >
      <HStack pr={['-32', '12', '12']}>
        <Link>
          <Image
            src={img}
            width="65px"
            height="55px"
            // width={{ base: '70px', md: '70px' }}
            // height={{ base: '70px', md: '70px' }}
            alt="Segun Adebayo"
          />
        </Link>
      </HStack>
      {/* <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box> */}
      {/* <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      > */}
      <Box marginRight="210px" marginTop={['-100px', '20px', '20px']}>
        <Flex
          marginTop={['180px', '2px', '2px']}
          gap="12"
          alignItems={['left', 'center', 'center']}
          textAlign={['left', 'center', 'center']}
          display={['column', 'flex', 'flex', 'flex']}

          // width={['190px' ]}

          // display={{ base: !show ? 'column' : 'none', md: 'flex' }}
        >
          <Box
            w="120px"
            gap={['10px', '120px', '120px']}
            display={['column', 'flex', 'flex']}
          >
            <NextLink colorScheme="teal" href="/How it Works">
              How it Works
            </NextLink>{' '}
          </Box>
          <Box
            display={['none', 'flex', 'flex']}
            alignItems={['flex-start', 'center', 'center']}
            bg={['red']}
          >
            <NextLink colorScheme="teal" href="/Crypto">
              Crypto
            </NextLink>
            <Box w="120px">
              <NextLink colorScheme="teal" href="/Marketplace">
                Marketplace
              </NextLink>
            </Box>

            <NextLink colorScheme="teal" href="/Sign In" passHref>
              Sign In
            </NextLink>
            <Box marginLeft="70px" marginTop="20px">
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
            </Box>
          </Box>
        </Flex>
      </Box>
      {/* </Box> */}
      {/* <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box> */}
      {/* <IconButton
        onClick={toggleMenu}
        aria-label="Open Menu"
        size="lg"
        icon={show ? <HamburgerIcon /> : <CloseIcon />}
       
      /> */}
      {/* display={['flex', 'flex', 'none', 'none']}
      display={{ base: !show ? 'block' : 'none', md: 'column' }} */}
    </Flex>
  )
}

export default Navbar
