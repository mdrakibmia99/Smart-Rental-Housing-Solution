import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";


const createUser = catchAsync(async (req, res) => {
  const result = await userService.createUser(req.body);
  const { _id, name, email } = result;
  sendResponse(res,StatusCodes.CREATED,'User created successfully', { _id, name, email });
});
export const userController = {
  createUser,
};
