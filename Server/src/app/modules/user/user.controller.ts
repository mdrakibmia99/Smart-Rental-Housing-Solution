import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userService } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await userService.createUser(req.body);
  const { _id, name, email } = result;
  sendResponse(res, StatusCodes.CREATED, 'User created successfully', {
    _id,
    name,
    email,
  });
});


const authMe = catchAsync(async (req, res) => {
  const userId = req?.user?.userId;
  const result = await userService.authMe(userId as string);
  sendResponse(
    res,
    StatusCodes.OK,
    'User Information getting successfully',
    result,
  );
});
// update profile
const profileUpdate = catchAsync(async (req, res) => {
  const userId = req?.user?.userId as string;
  const payload = req.body;
  const result = await userService.profileUpdate(userId, payload);
  sendResponse(res, StatusCodes.OK, 'Update profile Successful', result);
});

export const userController = {
  createUser,
  authMe,
  profileUpdate
};
