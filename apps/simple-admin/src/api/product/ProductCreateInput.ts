import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  name?: string | null;
  itemPrice?: number | null;
  description?: string | null;
  productType?: Array<"ELECTRONICS" | "BOOKS" | "CLOTHING">;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
