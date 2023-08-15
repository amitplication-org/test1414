import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADDRESS_TITLE_FIELD } from "./AddressTitle";
import { SOMETHING_TITLE_FIELD } from "../someThing/SomeThingTitle";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Address1" source="address1" />
        <TextField label="Address2" source="address2" />
        <TextField label="City" source="city" />
        <TextField label="State" source="state" />
        <TextField label="Zip" source="zip" />
        <ReferenceManyField
          reference="Customer"
          target="addressId"
          label="Customers"
        >
          <Datagrid rowClick="show">
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Address"
              source="address.id"
              reference="Address"
            >
              <TextField source={ADDRESS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Customer Type" source="customerType" />
            <ReferenceField
              label="Some Thing"
              source="something.id"
              reference="SomeThing"
            >
              <TextField source={SOMETHING_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
