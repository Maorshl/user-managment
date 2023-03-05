import {EResultsNumber, User} from '../models/apiModels';
import appAxios from '../networkManager/networkManager';

export const getUsersApi = async (numberOfRows: EResultsNumber) => {
  const res = await appAxios.get<{results: User[]}>(
    `?results=${numberOfRows}&seed=AirWaze`,
  );
  return res.data;
};
