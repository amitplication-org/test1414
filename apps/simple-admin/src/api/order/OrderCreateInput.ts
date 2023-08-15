import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  quantity?: number | null;
  discount?: number | null;
  totalPrice?: number | null;
  theCustomer?: CustomerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  status?: "PENDING" | "COMPLETED" | "CANCELLED" | null;
};
