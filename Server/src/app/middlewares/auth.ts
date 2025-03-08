import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/Auth/auth.validation";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import { StatusCodes } from "http-status-codes";
import jwt, { JwtPayload, TokenExpiredError } from 'jsonwebtoken';
import config from "../config";
import User from "../modules/user/user.model";


const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
       const token = req.headers.authorization;

       if (!token) {
          throw new AppError(
             StatusCodes.UNAUTHORIZED,
             'You are not authorized!'
          );
       }

       try {
          const decoded = jwt.verify(
             token,
             config.jwt_access_secret as string
          ) as JwtPayload;

          const { role, email } = decoded;

          const user = await User.isUserExistsByEmail(email);

          if (!user) {
             throw new AppError(
                StatusCodes.NOT_FOUND,
                'This user is not found!'
             );
          }

          if (requiredRoles && !requiredRoles.includes(role)) {
             throw new AppError(
                StatusCodes.UNAUTHORIZED,
                'You are not authorized!'
             );
          }

          req.user = decoded as JwtPayload & { role: string };
          next();
       } catch (error) {
          if (error instanceof TokenExpiredError) {
             return next(
                new AppError(
                   StatusCodes.UNAUTHORIZED,
                   'Token has expired! Please login again.'
                )
             );
          }
          return next(
             new AppError(StatusCodes.UNAUTHORIZED, 'Invalid token!')
          );
       }
    }
 );
};
export default auth;
