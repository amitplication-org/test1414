import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MergeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Merge Id" source="MergeId" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
