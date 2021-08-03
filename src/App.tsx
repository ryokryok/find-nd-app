import React from 'react'
import { Center, Heading, HStack, VStack } from '@chakra-ui/react'

import { UserSetting } from './components/UserSetting'
import { ReferenceSetting } from './components/ReferenceSetting'
import { useAppSelector } from './hooks'
import { calculateNDValue } from './lib'
function App() {
  const userSetting = useAppSelector((state) => state.userExposure)
  const referenceSetting = useAppSelector((state) => state.referenceExposure)

  return (
    <Center p={10}>
      <VStack>
        <Heading>Find ND Filter</Heading>
        <HStack spacing={4}>
          <UserSetting />
          <ReferenceSetting />
        </HStack>
        <Heading>You need : {calculateNDValue(userSetting, referenceSetting)} ND</Heading>
      </VStack>
    </Center>
  )
}
export default App
