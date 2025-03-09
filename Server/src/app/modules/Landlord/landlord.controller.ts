import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { landlordService } from './landlord.services';

const createLandlordsListing = catchAsync(async (req, res) => {
  const result = await landlordService.createLandlordsListing(req.body);
  sendResponse(res, StatusCodes.CREATED, 'House created successfully', result);
});



const getAllLandLordListing=catchAsync(async(req,res)=>{
    const query =req.query
    const result = await landLoardsService.getAllLandLordListing(query)
    sendResponse(res, StatusCodes.OK, 'Retrieve all rental listings posted by the landlord', result);

  })



  export const landlordController = {
    createLandlordsListing,
  };