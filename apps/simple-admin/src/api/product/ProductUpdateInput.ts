import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  name?: string | null;
  itemPrice?: number | null;
  description?: string | null;
  productType?: Array<"ELECTRONICS" | "BOOKS" | "CLOTHING">;
  orders?: OrderUpdateManyWithoutProductsInput;
};
