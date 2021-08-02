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
  Text,
} from '@chakra-ui/react'

import { useAppDispatch, useAppSelector } from './hooks'
import { changeFNumber, changeIso, changeShutterSpeed } from './redux'
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
  const dispatch = useAppDispatch()
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
      <NumberInput
        defaultValue={iso}
        clampValueOnBlur={false}
        onChange={(_, value) => dispatch(changeIso(value))}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <NumberInput
        defaultValue={shutterSpeed}
        clampValueOnBlur={false}
        onChange={(_, value) => dispatch(changeShutterSpeed(value))}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <NumberInput
        defaultValue={fNumber}
        clampValueOnBlur={false}
        onChange={(_, value) => dispatch(changeFNumber(value))}
        step={0.1}
        max={64}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Text>Exposure value : {calculateExposureValue(iso, 1 / shutterSpeed, fNumber)}</Text>
    </Stack>
  )
}

function calculateExposureValue(iso: number, shutterSpeed: number, fNumber: number): number {
  const ev100 = Math.log2(fNumber ** 2 / shutterSpeed)
  const correctionEv = Math.log2(iso / 100)
  return Math.round(ev100 + correctionEv)
}

export default App
