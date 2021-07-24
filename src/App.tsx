import React, { useState } from 'react'
import { Box, Text, Center } from '@chakra-ui/react'

function App() {
  return (
    <Center centerContent p='10'>
      <Box shadow='sm' backgroundColor='gray.200' p='2'>
        <Text
          p={1}
          color={'blackAlpha.800'}
          fontSize='4xl'
          _hover={{ color: 'red.800' }}
        >
          Hello
        </Text>
      </Box>
    </Center>
  )
}

export default App
