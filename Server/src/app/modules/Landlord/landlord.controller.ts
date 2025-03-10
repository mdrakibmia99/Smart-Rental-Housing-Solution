import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { landlordService } from './landlord.services';
import { TTokenResponse } from '../Auth/auth.interface';

const createLandlordsListing = catchAsync(async (req, res) => {
  const result = await landlordService.createLandlordsListing({...req.body, landlord: req?.user?.userId});
  sendResponse(res, StatusCodes.CREATED, 'House created successfully', result);
});

const getAllLandLordListing = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await landlordService.getAllLandLordListing(req.user as TTokenResponse,query);
  sendResponse(
    res,
    StatusCodes.OK,
    'Retrieve all rental listings posted by the landlord',
    result,
  );
});
const getSingleLandLordListing = catchAsync(async (req, res) => {
    const listingsId = req.params.id;
  const result = await landlordService.getSingleLandLordListing(listingsId);
  sendResponse(
    res,
    StatusCodes.OK,
    'Retrieve specific rental listing posted by the landlord',
    result,
  );
});
const deleteLandLordListing = catchAsync(async (req, res) => {
    const listingsId = req.params.id;
  const result = await landlordService.deleteLandLordListing(req?.user as TTokenResponse ,listingsId);
  sendResponse(
    res,
    StatusCodes.OK,
    'Remove rental listing successfully',
    result,
  );
});
const updateLandLordListing = catchAsync(async (req, res) => {
    const listingsId = req.params.id;
  const result = await landlordService.updateLandLordListing(listingsId,req?.body);
  sendResponse(
    res,
    StatusCodes.OK,
    'Updated rental listing successfully',
    result,
  );
});

export const landlordController = {
  createLandlordsListing,
  getAllLandLordListing,
  getSingleLandLordListing,
  deleteLandLordListing,
  updateLandLordListing
};
