import { Stack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { NumberInputForm } from '../Components'
import { useAppSelector, useAppDispatch } from '../hooks'
import { calculateExposureValue } from '../lib'
import {
  changeUserIso,
  changeUserShutterSpeed,
  changeUserFNumber,
} from '../redux/userExposureSlice'

export function UserSetting() {
  const exposure = useAppSelector((state) => state.userExposure)
  const { iso, shutterSpeed, fNumber } = exposure
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

      <Text>Exposure value(100) : {calculateExposureValue(exposure)}</Text>
    </Stack>
  )
}
