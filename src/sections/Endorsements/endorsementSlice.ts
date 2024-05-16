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
export const endorsementSlice = createSlice({
  name: 'endorsement',
  initialState,
  reducers: {
    setOverviewData : (state, action) =>{
      state.data = {...action.payload}
    }
  }
});
export const { setOverviewData } = endorsementSlice.actions

export default endorsementSlice.reducer