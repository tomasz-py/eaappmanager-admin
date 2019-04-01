import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import {
  StatusesList,
  StatusesCreate,
  StatusesEdit
} from "../Statuses/Statuses";

export default {
  key: "statuses",
  list: StatusesList,
  create: StatusesCreate,
  edit: StatusesEdit,
  icon: FormatListBulletedIcon,
  options: { label: "Statuses dictionary" }
};
