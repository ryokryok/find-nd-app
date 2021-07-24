import React, { useState } from 'react'
import {
  Box,
  Text,
  Center,
  Button,
  Input,
  Stack,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react'

function App() {
  return (
    <Center p={10}>
      <VStack>
        <Heading>Find ND Filter</Heading>
        <HStack spacing={4}>
          <SettingForm HeadText='Your setting' />
          <SettingForm HeadText='Reference setting' />
        </HStack>
        <Heading>You need : 100 ND</Heading>
      </VStack>
    </Center>
  )
}

type SettingFormProps = {
  HeadText: string
}
function SettingForm({ HeadText }: SettingFormProps) {
  return (
    <Stack
      spacing={3}
      p={4}
      rounded={'md'}
      shadow={'md'}
      border={'1px'}
      borderColor={'gray.200'}
      w={'sm'}
    >
      <Heading>{HeadText}</Heading>
      <Input placeholder='iso' />
      <Input placeholder='shutter speed (1/s)' />
      <Input placeholder='f value' />
    </Stack>
  )
}

export default App
