import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../../models/apiModels';

export interface HomeState {
  users: User[];
}

const initialState: HomeState = {
  users: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUsers} = homeSlice.actions;

export default homeSlice.reducer;
