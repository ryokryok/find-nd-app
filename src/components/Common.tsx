import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
  Link,
  VStack,
  Button,
  Box,
  HStack,
  Text,
  Spacer,
} from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import React from 'react'
import { useAppSelector } from '../hooks'
import { calculateExposureValue, calculateNDValue } from '../lib'
import { ExposureState } from '../types'

type NumberInputFormProps = {
  label?: string
  value: number
  handler: (valueAsString: string, valueAsNumber: number) => void
  step: number
}

export function NumberInputForm({ label = '', value, handler, step }: NumberInputFormProps) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <NumberInput
        defaultValue={value}
        clampValueOnBlur={false}
        onChange={handler}
        step={step}
        size={'lg'}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  )
}

export function NDValueBox() {
  const userSetting = useAppSelector((state) => state.userExposure)
  const referenceSetting = useAppSelector((state) => state.referenceExposure)
  return (
    <HStack align='stretch' p={2}>
      <Spacer />
      <Heading>{calculateNDValue(userSetting, referenceSetting)} ND</Heading>
    </HStack>
  )
}

type ExposureValueBoxProps = {
  exposure: ExposureState
}

export function ExposureValueBox({ exposure }: ExposureValueBoxProps) {
  return <Text>Exposure value(ISO 100) : {calculateExposureValue(exposure)}</Text>
}

export function TitleHeader() {
  return (
    <HStack p={2}>
      <Box as='header'>
        <Heading>Find ND Filter</Heading>
      </Box>
      <Spacer />
      <Button>
        <InfoIcon />
      </Button>
    </HStack>
  )
}

export function Footer() {
  return (
    <VStack p={2}>
      <Text>
        Made by{' '}
        <Link href='https://github.com/ryokryok' color='blue.500' isExternal>
          Mr_ozin
        </Link>
      </Text>
      <Text>
        <Link href='https://github.com/ryokryok/find-nd-app' isExternal color='blue.500'>
          {' '}
          Repository
        </Link>
      </Text>
    </VStack>
  )
}
