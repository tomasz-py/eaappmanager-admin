import SettingsIcon from "@material-ui/icons/Settings";
import {
  ServicesList,
  ServicesEdit,
  ServicesCreate
} from "../Services/Services";

export default {
  key: "services",
  list: ServicesList,
  create: ServicesCreate,
  edit: ServicesEdit,
  icon: SettingsIcon
};
