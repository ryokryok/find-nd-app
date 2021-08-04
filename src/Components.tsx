import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import React from 'react'

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
