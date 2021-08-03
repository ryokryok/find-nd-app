import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import React from 'react'

type NumberInputFormProps = {
  value: number
  handler: (valueAsString: string, valueAsNumber: number) => void
  step: number
}

export function NumberInputForm({ value, handler, step }: NumberInputFormProps) {
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
