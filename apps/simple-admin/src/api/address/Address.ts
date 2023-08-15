import { Customer } from "../customer/Customer";

export type Address = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address1: string | null;
  address2: string | null;
  city: string | null;
  state: string | null;
  zip: number | null;
  customers?: Array<Customer>;
};
