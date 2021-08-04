import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ExposureState } from '../types'

// sunny 16 rule
const initialState: ExposureState = {
  iso: 100,
  shutterSpeed: 100,
  fNumber: 16.0,
}

export const userExposureSlice = createSlice({
  name: 'userExposure',
  initialState,
  reducers: {
    changeUserIso: (state, action: PayloadAction<number>) => {
      state.iso = action.payload
    },
    changeUserShutterSpeed: (state, action: PayloadAction<number>) => {
      state.shutterSpeed = action.payload
    },
    changeUserFNumber: (state, action: PayloadAction<number>) => {
      state.fNumber = action.payload
    },
    ChangeAllUserSetting: (state, action: PayloadAction<ExposureState>) => {
      state = action.payload
    },
  },
})

export const { changeUserIso, changeUserShutterSpeed, changeUserFNumber, ChangeAllUserSetting } =
  userExposureSlice.actions

export const userExposureReducer = userExposureSlice.reducer
