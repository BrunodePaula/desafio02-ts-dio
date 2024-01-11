import './Header.css'
import { Box, Center, Heading } from '@chakra-ui/react'

export const Header  = () => {
  return(
    <Center bg='orange' w='100%' height="40px" p="10px" color='white'>
      <Heading>
        Dio Bank
      </Heading>
    </Center>
  )
}
