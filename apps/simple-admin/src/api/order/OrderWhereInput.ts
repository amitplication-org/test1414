import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderWhereInput = {
  theCustomer?: CustomerWhereUniqueInput;
  product?: ProductWhereUniqueInput;
};
