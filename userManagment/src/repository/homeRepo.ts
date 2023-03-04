import {getUsersApi} from '../api/homeApi';
import {EResultsNumber} from '../models/apiModels';

export const getUsersRepo = async (numberOfRows: EResultsNumber) => {
  const {results} = await getUsersApi(numberOfRows);
  return results;
};
