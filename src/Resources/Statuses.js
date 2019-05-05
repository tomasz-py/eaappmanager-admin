import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import {
  StatusesList,
  StatusesCreate,
  StatusesEdit
} from "../Statuses/Statuses";

export const adminStatuses = {
  key: "statuses",
  list: StatusesList,
  create: StatusesCreate,
  edit: StatusesEdit,
  icon: FormatListBulletedIcon,
  options: { label: "Statuses dictionary" }
};

export const userStatuses = {
  key: "statuses",
  list: StatusesList,
  icon: FormatListBulletedIcon,
  options: { label: "Statuses dictionary" }
};
