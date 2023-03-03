import {getUsersRepo} from '../../../repository/homeRepo';
import {AppThunk} from '../../../store/store';
import {setProfile} from '../../profile/state/profileSlice';
import {setUsers} from './homeSlice';

export const getHomeUsers = (): AppThunk => async dispatch => {
  try {
    const users = await getUsersRepo();
    dispatch(setUsers(users));
    dispatch(setProfile(users[0]));
  } catch (error) {
    console.log(error);
  }
};
