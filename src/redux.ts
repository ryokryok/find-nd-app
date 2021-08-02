import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExposureState {
  iso: number
  shutterSpeed: number
  fNumber: number
}

// sunny 16 rule
const initialState: ExposureState = {
  iso: 100,
  shutterSpeed: 100,
  fNumber: 16.0,
}

export const exposureSlice = createSlice({
  name: 'exposure',
  initialState,
  reducers: {
    changeIso: (state, action: PayloadAction<number>) => {
      state.iso = action.payload
    },
    changeShutterSpeed: (state, action: PayloadAction<number>) => {
      state.shutterSpeed = action.payload
    },
    changeFNumber: (state, action: PayloadAction<number>) => {
      state.fNumber = action.payload
    },
    reset: (state) => {
      state = initialState
    },
  },
})

export const { changeIso, changeShutterSpeed, changeFNumber } = exposureSlice.actions

const exposureReducer = exposureSlice.reducer

export const store = configureStore({
  reducer: {
    exposure: exposureReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
