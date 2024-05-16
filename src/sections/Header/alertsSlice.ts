import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { AlertsData } from '../../interfaces';
import { API_URLS } from '../../data/data';

const initialState: AlertsData = {
  data: {},
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
  reducers: {

  },
  extraReducers(builder:any) {
    builder
      .addCase(fetchAlertsData.pending, (state:AlertsData, action: any ) => {
        state.status = 'loading'
        console.log('Payload', action.payload)
      })
      .addCase(fetchAlertsData.fulfilled, (state:AlertsData, action: any) => {
        state.status = 'succeeded'
        state.data = {...action.payload}
      })
      .addCase(fetchAlertsData.rejected, (state:AlertsData, action:any) => {
        state.status = 'failed'
        state.error = action.error.message
        console.log('Payload', action.payload)
      })
  }
});

export default alertsSlice.reducer