import { Stack, Heading, Text, Spacer } from '@chakra-ui/react'
import React from 'react'
import { ExposureValueBox, NumberInputForm } from './Common'
import { useAppSelector, useAppDispatch } from '../hooks'
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
      borderColor={'gray.300'}
      w={'xs'}
    >
      <Heading>
        Your <br />
        setting
      </Heading>
      <Spacer />
      <NumberInputForm
        label={'ISO'}
        value={iso}
        handler={(_, value) => dispatch(changeUserIso(value))}
        step={10}
      />
      <NumberInputForm
        label={'Shutter Speed (1 / s)'}
        value={shutterSpeed}
        handler={(_, value) => dispatch(changeUserShutterSpeed(value))}
        step={1}
      />
      <NumberInputForm
        label={'F Number'}
        value={fNumber}
        handler={(_, value) => dispatch(changeUserFNumber(value))}
        step={0.1}
      />
      <ExposureValueBox exposure={exposure} />
    </Stack>
  )
}
