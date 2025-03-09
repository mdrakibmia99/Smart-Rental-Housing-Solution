import { StatusCodes } from 'http-status-codes';
import QueryBuilder from '../../builder/queryBuilder';
import AppError from '../../errors/AppError';
import { TTokenResponse } from '../Auth/auth.interface';
import { ILandlord } from './landlord.interface';
import Landlord from './landlord.model';

const createLandlordsListing = async (payload: ILandlord) => {
  const result = await Landlord.create(payload);
  return result;
};
const getAllLandLordListing = async (
  user: TTokenResponse,
  query: Record<string, unknown>,
) => {
  if (user.role === 'admin') {
    const searchableFields = [
      'location',
      'description',
      'bedrooms',
      'amenities',
    ];
    const bikeQuery = new QueryBuilder(Landlord.find(), query)
      .search(searchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();

    const result = await bikeQuery.modelQuery;
    const meta = await bikeQuery.countTotal();
    return {
      meta,
      result,
    };
  }

  const searchableFields = ['location', 'description', 'bedrooms', 'amenities'];
  const bikeQuery = new QueryBuilder(
    Landlord.find({ landlord: user.userId }),
    query,
  )
    .search(searchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await bikeQuery.modelQuery;
  const meta = await bikeQuery.countTotal();
  return {
    meta,
    result,
  };
};
const getSingleLandLordListing = async (id: string) => {
  const result = await Landlord.findById(id);
  return result;
};
const deleteLandLordListing = async (user: TTokenResponse, id: string) => {
  //   const result = await Landlord.findByIdAndDelete(id);
  const listingData = await Landlord.findById(id);
  if (!listingData) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Listing not found');
  }
  if (
    user.role === 'admin' ||
    (listingData?.landlord as unknown as string) == user?.userId
  ) {
    console.log('yes');
    await Landlord.findByIdAndDelete(id);
  } else {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      'You are not authorized to delete this listing',
    );
  }

  return {};
};

export const landlordService = {
  createLandlordsListing,
  getAllLandLordListing,
  getSingleLandLordListing,
  deleteLandLordListing,
};
