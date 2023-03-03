import {getUsersRepo} from '../../../repository/homeRepo';
import {AppThunk} from '../../../store/store';
import {setUsers} from './homeSlice';

export const getHomeUsers = (): AppThunk => async dispatch => {
  try {
    const users = await getUsersRepo();
    dispatch(setUsers(users));
  } catch (error) {
    console.log(error);
  }
};
