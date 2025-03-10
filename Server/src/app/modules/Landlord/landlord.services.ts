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
  const searchableFields = ['location', 'description', 'bedrooms', 'amenities'];
  const landlordQuery = new QueryBuilder(
    Landlord.find({ landlord: user.userId  }),
    query,
  )
    .search(searchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await landlordQuery.modelQuery;
  const meta = await landlordQuery.countTotal();
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
    await Landlord.findByIdAndDelete(id);
  } else {
    throw new AppError(
      StatusCodes.UNAUTHORIZED,
      'You are not authorized to delete this listing',
    );
  }

  return {};
};

const updateLandLordListing = async (id: string, payload: ILandlord) => {
  const result = await Landlord.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        ...(payload?.location && { location: payload.location }),
        ...(payload?.description && { description: payload.description }),
        ...(payload?.images?.length > 0 && { images: payload.images }),
        ...(Number(payload?.rent) > 0 && { rent: payload.rent }),
        ...(Number(payload?.rent) > 0 && { bedrooms: payload.bedrooms }),
        ...(payload?.amenities && payload?.amenities?.length > 0 && { amenities: payload.amenities }),
          
        ...(payload?.phone && { phone: payload.phone }),
        ...(payload?.email && { email: payload.email }),
        ...(payload.bedrooms < 1
          ? { isAvailable: false }
          : { isAvailable: true }),
      },
    },
    {
      new: true,
    },
  );
  return result;
};

export const landlordService = {
  createLandlordsListing,
  getAllLandLordListing,
  getSingleLandLordListing,
  deleteLandLordListing,
  updateLandLordListing
};
