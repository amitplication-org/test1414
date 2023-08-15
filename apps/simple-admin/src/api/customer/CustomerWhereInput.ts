import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { SomeThingWhereUniqueInput } from "../someThing/SomeThingWhereUniqueInput";

export type CustomerWhereInput = {
  address?: AddressWhereUniqueInput;
  orders?: OrderListRelationFilter;
  someThing?: SomeThingWhereUniqueInput;
};
