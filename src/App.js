import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import { UserList } from "./users/users";
import { PostList, PostEdit, PostCreate, BlogList } from "./posts/posts";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard/Dashboard";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import authProvider from "./authProvider/authProvider";
import loopbackClient from "react-admin-loopback";

import { List, Datagrid, TextField } from "react-admin";

//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const Blist = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="author" />
      <TextField source="creationdate" />
    </Datagrid>
  </List>
);

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={loopbackClient("http://localhost:3000/api/")}
    authProvider={authProvider}
  >
    <Resource name="blogs" list={Blist} icon={UserIcon} />
  </Admin>
);

// const App = () => (
//   <Admin
//     dashboard={Dashboard}
//     dataProvider={dataProvider}
//     authProvider={authProvider}
//   >
//     <Resource name="users" list={UserList} icon={UserIcon} />
//     <Resource
//       name="posts"
//       list={PostList}
//       edit={PostEdit}
//       create={PostCreate}
//       icon={PostIcon}
//     />
//   </Admin>
// );

export default App;
