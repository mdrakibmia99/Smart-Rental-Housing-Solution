import { Router } from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../../constants/user";
import { TenantController } from "./tenant.controller";



const TenantRouter = Router();

TenantRouter.post("/requests", auth(USER_ROLE.tenant), TenantController.createRentalRequest);
TenantRouter.get("/requests", auth(USER_ROLE.tenant), TenantController.getAllRentalRequest);


export default TenantRouter;
