import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EResultsNumber, User} from '../../../models/apiModels';

export interface HomeState {
  users: User[];
  numberOfRows: EResultsNumber;
}

const initialState: HomeState = {
  users: [],
  numberOfRows: EResultsNumber.TEN,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setEditedUser: (
      state,
      action: PayloadAction<{user: User; index: number}>,
    ) => {
      state.users[action.payload.index] = action.payload.user;
    },
    setNumberOfRows: (state, action: PayloadAction<EResultsNumber>) => {
      state.numberOfRows = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUsers, setEditedUser, setNumberOfRows} = homeSlice.actions;

export default homeSlice.reducer;
