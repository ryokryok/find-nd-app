import React from 'react'
import {
  Center,
  Stack,
  Heading,
  HStack,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { useAppSelector } from './hooks'
function App() {
  return (
    <Center p={10}>
      <VStack>
        <Heading>Find ND Filter</Heading>
        <HStack spacing={4}>
          <SettingForm HeadText='Your setting' />
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
  const { iso, shutterSpeed, fNumber } = useAppSelector((state) => state.exposure)
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
      <NumberInputForm value={iso} />
      <NumberInputForm value={shutterSpeed} />
      <NumberInputForm value={fNumber} />
    </Stack>
  )
}

type NumberInputFormProps = {
  value: number
}

function NumberInputForm({ value }: NumberInputFormProps) {
  return (
    <NumberInput defaultValue={value} clampValueOnBlur={false}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}

export default App
