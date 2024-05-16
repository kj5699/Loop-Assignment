import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { EndorsementState } from '../../interfaces';

const initialState: EndorsementState  = {
    data: {
      insurance: {} ,
      endorsementCost: {}, 
      lifeCount: {}
  },
  status:'idle',
  error: null
}

export const fetchEndorsementData = createAsyncThunk('posts/fetchEndorsementData', async() => {
  const response = await fetch('https://demo6728408.mockable.io/overview');
  const jsonResponse = await response.json()
  console.log('Json Response', jsonResponse)
  return jsonResponse
})
export const endorsementSlice = createSlice({
  name: 'endorsement',
  initialState,
  reducers: {

  },
  extraReducers(builder:any) {
    builder
      .addCase(fetchEndorsementData.pending, (state:EndorsementState , action: any ) => {
        state.status = 'loading'
      })
      .addCase(fetchEndorsementData.fulfilled, (state:EndorsementState , action: any) => {
        state.status = 'succeeded'
        state.data = {...action.payload}
      })
      .addCase(fetchEndorsementData.rejected, (state:EndorsementState , action:any) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export default endorsementSlice.reducer