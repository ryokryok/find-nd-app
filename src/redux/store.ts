import { configureStore } from '@reduxjs/toolkit'
import { userExposureReducer } from './userExposureSlice'
import { referenceExposureReducer } from './referenceExposureSlice'

export const store = configureStore({
  reducer: {
    userExposure: userExposureReducer,
    referenceExposure: referenceExposureReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
