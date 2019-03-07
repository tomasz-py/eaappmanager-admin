import React from "react";
import { Admin, Resource } from "react-admin";
//import { UserList } from "./users/users";
//import { PostList, PostEdit, PostCreate, BlogList } from "./posts/posts";
//import jsonServerProvider from "ra-data-json-server";
import Dashboard from "./Dashboard/Dashboard";
//import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import authProvider from "./authProvider/authProvider";
import loopbackClient from "react-admin-loopback";
import { BlogsList, BlogEdit, BlogCreate } from "./Blogs/Blogs";

//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = loopbackClient("http://localhost:3000/api/");

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
  >
    <Resource
      name="blogs"
      list={BlogsList}
      icon={UserIcon}
      create={BlogCreate}
      edit={BlogEdit}
    />
  </Admin>
);

export default App;
