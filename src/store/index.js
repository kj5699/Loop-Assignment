import { configureStore } from '@reduxjs/toolkit'
import endorsementReducer from '../sections/Endorsements/endorsementSlice'
import alertsSlice from '../sections/Header/alertsSlice'

export default configureStore({
  reducer: {
    endorsements: endorsementReducer,
    alerts: alertsSlice
  }
})