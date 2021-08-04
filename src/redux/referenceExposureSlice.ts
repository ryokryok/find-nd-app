import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExposureState } from '../types'

// sunny 16 rule
const initialState: ExposureState = {
  iso: 100,
  shutterSpeed: 100,
  fNumber: 16.0,
}

export const referenceExposureSlice = createSlice({
  name: 'referenceExposure',
  initialState,
  reducers: {
    changeReferenceIso: (state, action: PayloadAction<number>) => {
      state.iso = action.payload
    },
    changeReferenceShutterSpeed: (state, action: PayloadAction<number>) => {
      state.shutterSpeed = action.payload
    },
    changeReferenceFNumber: (state, action: PayloadAction<number>) => {
      state.fNumber = action.payload
    },
    ChangeAllReferenceSetting: (state, action: PayloadAction<ExposureState>) => {
      state = action.payload
    },
  },
})

export const {
  changeReferenceIso,
  changeReferenceShutterSpeed,
  changeReferenceFNumber,
  ChangeAllReferenceSetting,
} = referenceExposureSlice.actions

export const referenceExposureReducer = referenceExposureSlice.reducer
