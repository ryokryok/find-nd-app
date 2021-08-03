import { Stack, Heading, Text } from '@chakra-ui/react'
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
  const { iso, shutterSpeed, fNumber } = useAppSelector((state) => state.referenceExposure)
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
      <Heading>Reference setting</Heading>
      <NumberInputForm
        value={iso}
        handler={(_, value) => dispatch(changeReferenceIso(value))}
        step={10}
      />

      <NumberInputForm
        value={shutterSpeed}
        handler={(_, value) => dispatch(changeReferenceShutterSpeed(value))}
        step={1}
      />

      <NumberInputForm
        value={fNumber}
        handler={(_, value) => dispatch(changeReferenceFNumber(value))}
        step={0.1}
      />

      <Text>Exposure value(100) : {calculateExposureValue(iso, shutterSpeed, fNumber)}</Text>
    </Stack>
  )
}
