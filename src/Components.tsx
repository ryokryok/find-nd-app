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
      <NumberInputForm
        value={iso}
        handler={(_, value) => dispatch(changeUserIso(value))}
        step={10}
      />

      <NumberInputForm
        value={shutterSpeed}
        handler={(_, value) => dispatch(changeUserShutterSpeed(value))}
        step={1}
      />

      <NumberInputForm
        value={fNumber}
        handler={(_, value) => dispatch(changeUserFNumber(value))}
        step={0.1}
      />

      <Text>Exposure value : {calculateExposureValue(iso, 1 / shutterSpeed, fNumber)}</Text>
    </Stack>
  )
}

type NumberInputFormProps = {
  value: number
  handler: (valueAsString: string, valueAsNumber: number) => void
  step: number
}

function NumberInputForm({ value, handler, step }: NumberInputFormProps) {
  return (
    <NumberInput defaultValue={value} clampValueOnBlur={false} onChange={handler} step={step}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}

function calculateExposureValue(iso: number, shutterSpeed: number, fNumber: number): number {
  const ev100 = Math.log2(fNumber ** 2 / shutterSpeed)
  const correctionEv = Math.log2(iso / 100)
  return ev100 + correctionEv
}
