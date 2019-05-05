import SettingsIcon from "@material-ui/icons/Settings";
import {
  ServicesList,
  ServicesEdit,
  ServicesCreate
} from "../Services/Services";

export const adminServices = {
  key: "services",
  list: ServicesList,
  create: ServicesCreate,
  edit: ServicesEdit,
  icon: SettingsIcon
};

export const userServices = {
  key: "services",
  list: ServicesList,
  icon: SettingsIcon
};
