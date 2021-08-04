import { Stack, Heading, Text, Spacer } from '@chakra-ui/react'
import React from 'react'
import { NumberInputForm } from '../Components'
import { useAppSelector, useAppDispatch } from '../hooks'
import { calculateExposureValue } from '../lib'
import {
  changeReferenceIso,
  changeReferenceShutterSpeed,
  changeReferenceFNumber,
} from '../redux/referenceExposureSlice'

export function ReferenceSetting() {
  const exposure = useAppSelector((state) => state.referenceExposure)
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
      <Heading>Reference setting</Heading>
      <Spacer />
      <NumberInputForm
        label={'ISO'}
        value={iso}
        handler={(_, value) => dispatch(changeReferenceIso(value))}
        step={10}
      />

      <NumberInputForm
        label={'Shutter Speed (1 / s)'}
        value={shutterSpeed}
        handler={(_, value) => dispatch(changeReferenceShutterSpeed(value))}
        step={1}
      />

      <NumberInputForm
        label={'F Number'}
        value={fNumber}
        handler={(_, value) => dispatch(changeReferenceFNumber(value))}
        step={0.1}
      />

      <Text>Exposure value(100) : {calculateExposureValue(exposure)}</Text>
    </Stack>
  )
}
