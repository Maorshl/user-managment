import {getUsersRepo} from '../../../repository/homeRepo';
import {AppThunk} from '../../../store/store';
import {setProfile} from '../../profile/state/profileSlice';
import {setIsLoading, setUsers} from './homeSlice';

export const getHomeUsers = (): AppThunk => async (dispatch, getState) => {
  try {
    dispatch(setIsLoading(true));
    const users = await getUsersRepo(getState().home.numberOfRows);
    dispatch(setUsers(users));
    dispatch(setProfile(users[0]));
    dispatch(setIsLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(setIsLoading(false));
  }
};
