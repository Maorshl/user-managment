import {User} from '../models/apiModels';
import appAxios from '../networkManager/networkManager';

export const getUsersApi = async () => {
  const res = await appAxios.get<{results: User[]}>('?results=20&seed=maor');
  console.log(res.data);
  return res.data;
};
