import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import { UserList } from "./users/users";
import { PostList, PostEdit, PostCreate } from "./posts/posts";
import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard/Dashboard";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import authProvider from "./authProvider/authProvider";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
  </Admin>
);

export default App;
