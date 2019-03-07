import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  DisabledInput,
  SimpleForm,
  Create,
  TextInput,
  EditButton
} from "react-admin";

export const BlogsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="author" />
      <TextField source="creationdate" />
      <EditButton />
    </Datagrid>
  </List>
);

export const BlogEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="body" />
      <DisabledInput source="id" />
    </SimpleForm>
  </Edit>
);

// export const BlogEdit = props => (
//   <Edit {...props}>
//     <SimpleForm>
//       <TextInput source="title" />
//       <TextInput source="author" />
//       <DateInput source="creationdate" />
//       <TextInput source="body" />
//       <TextInput source="tags" />
//       <DateInput source="updatedate" />
//       <DisabledInput source="id" />
//     </SimpleForm>
//   </Edit>
// );

export const BlogCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="author" />
      <TextInput source="creationdate" />
      <TextInput source="body" />
      <TextInput source="tags" />
      <TextInput source="updatedate" />
      <TextInput source="id" />
    </SimpleForm>
  </Create>
);
