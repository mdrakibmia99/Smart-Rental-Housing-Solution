import { Router } from 'express';
import { landlordController } from './landlord.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../../constants/user';

const landLordRouter = Router();
// create rental house 
landLordRouter.post(
  '/listings',
  auth(USER_ROLE.landlord),
  landlordController.createLandlordsListing,
);
landLordRouter.get(
  '/listings',
  auth(USER_ROLE.landlord, USER_ROLE.admin, USER_ROLE.tenant),
  landlordController.getAllLandLordListing,
);
landLordRouter.put(
  '/listings/:id',
  auth(USER_ROLE.landlord, USER_ROLE.admin),
  landlordController.updateLandLordListing,
);
landLordRouter.get(
  '/listings/:id',
  auth(USER_ROLE.landlord, USER_ROLE.admin, USER_ROLE.tenant),
  landlordController.getSingleLandLordListing,
);
landLordRouter.delete(
  '/listings/:id',
  auth(USER_ROLE.landlord, USER_ROLE.admin),
  landlordController.deleteLandLordListing,
);


export default landLordRouter;
