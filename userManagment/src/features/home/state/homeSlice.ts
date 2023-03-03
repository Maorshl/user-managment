import {createSlice} from '@reduxjs/toolkit';

export interface HomeState {
  value: number;
}

const initialState: HomeState = {
  value: 0,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = homeSlice.actions;

export default homeSlice.reducer;
