import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AlertsData } from '../../interfaces';
import { API_URLS } from '../../data/data';

const initialState: AlertsData = {
  data: {
    alerts: {}
  },
  status:'idle',
  error: null
}

export const fetchAlertsData = createAsyncThunk('posts/fetchfetchAlertsData', async() => {
  const response = await fetch(API_URLS.getAlerts);
  const jsonResponse = await response.json()
  return jsonResponse
})
export const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {},
});

export default alertsSlice.reducer