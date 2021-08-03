import {
  Stack,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { useAppSelector, useAppDispatch } from './hooks'
import { changeUserIso, changeUserShutterSpeed, changeUserFNumber } from './redux/userExposureSlice'

export function UserSettingForm() {
  const { iso, shutterSpeed, fNumber } = useAppSelector((state) => state.userExposure)
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
      <Heading>Your setting</Heading>
      <NumberInput
        defaultValue={iso}
        clampValueOnBlur={false}
        onChange={(_, value) => dispatch(changeUserIso(value))}
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
        onChange={(_, value) => dispatch(changeUserShutterSpeed(value))}
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
        onChange={(_, value) => dispatch(changeUserFNumber(value))}
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
  return ev100 + correctionEv
}
