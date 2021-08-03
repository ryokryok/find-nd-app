import React from 'react'
import { Center, Heading, HStack, VStack } from '@chakra-ui/react'

import { UserSetting } from './components/UserSetting'
function App() {
  return (
    <Center p={10}>
      <VStack>
        <Heading>Find ND Filter</Heading>
        <HStack spacing={4}>
          <UserSetting />
        </HStack>
        <Heading>You need : 100 ND</Heading>
      </VStack>
    </Center>
  )
}

export default App
