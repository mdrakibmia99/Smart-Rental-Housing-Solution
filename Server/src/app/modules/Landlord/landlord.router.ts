import { Router } from "express";
import { landlordController } from "./landlord.controller";

const landLordRouter = Router();
landLordRouter.post(
    '/listings',
    landlordController.createLandlordsListing
  );

export default landLordRouter;