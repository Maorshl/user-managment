import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EResultsNumber, User} from '../../../models/apiModels';

export interface HomeState {
  users: User[];
  numberOfRows: EResultsNumber;
  isLoading: boolean;
}

const initialState: HomeState = {
  users: [],
  numberOfRows: EResultsNumber.TEN,
  isLoading: false,
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
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users.splice(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setUsers,
  setEditedUser,
  setNumberOfRows,
  setIsLoading,
  deleteUser,
} = homeSlice.actions;

export default homeSlice.reducer;
