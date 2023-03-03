import {getUsersApi} from '../api/homeApi';

export const getUsersRepo = async () => {
  const {results} = await getUsersApi();
  return results;
};
