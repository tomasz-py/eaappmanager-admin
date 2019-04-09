import UserIcon from "@material-ui/icons/Group";
import {
  AppUsersList,
  AppUsersCreate,
  AppUsersEdit
} from "../Appusers/Appusers";

export default {
  key: "appusers",
  list: AppUsersList,
  icon: UserIcon,
  create: AppUsersCreate,
  edit: AppUsersEdit,
  options: { label: "Users" }
};
