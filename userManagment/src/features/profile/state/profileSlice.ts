import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../../models/apiModels';

export interface ProfileState {
  currentUser?: User;
}

const initialState: ProfileState = {
  currentUser: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
  },
});

export const {setProfile} = profileSlice.actions;

export default profileSlice.reducer;
