import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  address1?: SortOrder;
  address2?: SortOrder;
  city?: SortOrder;
  state?: SortOrder;
  zip?: SortOrder;
};
