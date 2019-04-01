import UserIcon from "@material-ui/icons/Group";
import { UsersList, UsersCreate, UsersEdit } from "../Users/Users";

export default {
  key: "appusers",
  list: UsersList,
  icon: UserIcon,
  create: UsersCreate,
  edit: UsersEdit,
  options: { label: "Users" }
};
