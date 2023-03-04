import {getUsersRepo} from '../../../repository/homeRepo';
import {AppThunk} from '../../../store/store';
import {setProfile} from '../../profile/state/profileSlice';
import {setUsers} from './homeSlice';

export const getHomeUsers = (): AppThunk => async (dispatch, getState) => {
  try {
    const users = await getUsersRepo(getState().home.numberOfRows);
    dispatch(setUsers(users));
    dispatch(setProfile(users[0]));
  } catch (error) {
    console.log(error);
  }
};
