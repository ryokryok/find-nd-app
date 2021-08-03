import { configureStore } from '@reduxjs/toolkit'
import { userExposureReducer } from './userExposureSlice'

export const store = configureStore({
  reducer: {
    userExposure: userExposureReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
