import { ILandlord } from './landlord.interface';
import Landlord from './landlord.model';

const createLandlordsListing = async (payload: ILandlord) => {
  const result = await Landlord.create(payload);
  return result;
};

export const landlordService = {
  createLandlordsListing,
};



