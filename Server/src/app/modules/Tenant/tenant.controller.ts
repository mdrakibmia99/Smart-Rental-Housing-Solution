import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TenantService } from './tenant.services';

const createRentalRequest = catchAsync(async (req, res) => {
  const result = await TenantService.createUser(
    req.body,
    req?.user?.userId as string,
  );
  sendResponse(
    res,
    StatusCodes.CREATED,
    'Rental request created successfully',
    result,
  );
});
const getAllRentalRequest = catchAsync(async (req, res) => {
  const query = req.query;
  const result = await TenantService.getAllRentalRequest(
    req?.user?.userId as string,
    query,
  );
  sendResponse(
    res,
    StatusCodes.CREATED,
    'Rental request created successfully',
    result,
  );
});

export const TenantController = {
  createRentalRequest,
  getAllRentalRequest,
};
