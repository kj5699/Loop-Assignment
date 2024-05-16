import { configureStore } from '@reduxjs/toolkit'
import endorsementReducer from '../sections/Endorsements/endorsementSlice'
import alertsSlice from '../sections/Header/alertsSlice'
import { apiSlice } from './api/apislice'

export default configureStore({
  reducer: {
    endorsements: endorsementReducer,
    alerts: alertsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})