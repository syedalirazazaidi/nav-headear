import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../component/Header'
import Navbar from '../component/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Box>
      <Header />
      {/* <Navbar /> */}
    </Box>
  )
}
