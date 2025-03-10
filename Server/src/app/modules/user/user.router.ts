import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import { userController } from "./user.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../../constants/user";


const userRouter = Router();
userRouter.post(
    '/register',
    validateRequest(userValidation.UserValidationSchema),
     userController.createUser
  );
  userRouter.get(
    '/me',
    auth(USER_ROLE.admin, USER_ROLE.landlord, USER_ROLE.tenant),
    userController.authMe,
  );


  userRouter.patch(
    '/update-profile',
    auth(USER_ROLE.admin, USER_ROLE.landlord, USER_ROLE.tenant),
    validateRequest(userValidation.updateUserProfileSchema),
    userController.profileUpdate,
  );

export default userRouter;