import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  id?: SortOrder;
  addressId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
  customerType?: SortOrder;
  someThingId?: SortOrder;
};
