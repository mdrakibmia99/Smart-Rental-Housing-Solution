import { StatusCodes } from 'http-status-codes';
import AppError from '../../errors/AppError';
import { IRentalRequest } from './tenant.interface';
import Tenant from './tenant.model';
import QueryBuilder from '../../builder/queryBuilder';

const createUser = async (payload: IRentalRequest, tenantId: string) => {
  const checkPreviousRentalRequest = await Tenant.findOne({
    tenantId,
    rentalHouseId: payload.rentalHouseId,
    status: 'pending',
  });
  if (checkPreviousRentalRequest) {
    throw new AppError(
      StatusCodes.CONFLICT,
      'You already have a pending request for this house',
    );
  }
  const result = await Tenant.create({ ...payload, tenantId });
  return result;
};
const getAllRentalRequest = async (
  tenantId: string,
  query: Record<string, unknown>,
) => {
  const searchableFields = ['additionalMessage'];
  const tenantQuery = new QueryBuilder(Tenant.find({ tenantId }).populate('rentalHouseId tenantId'), query)
    .search(searchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await tenantQuery.modelQuery;
  const meta = await tenantQuery.countTotal();
  return {
    meta,
    result,
  };
};

export const TenantService = {
  createUser,
  getAllRentalRequest,
};
