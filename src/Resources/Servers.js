import StorageIcon from "@material-ui/icons/Storage";
import {
  ServersList,
  ServersCreate,
  ServersEdit,
  ServersShow
} from "../Servers/Servers";

export const adminServers = {
  key: "servers",
  list: ServersList,
  create: ServersCreate,
  edit: ServersEdit,
  show: ServersShow,
  icon: StorageIcon,
  options: { label: "Servers" }
};

export const userServers = {
  key: "servers",
  list: ServersList,
  show: ServersShow,
  icon: StorageIcon,
  options: { label: "Servers" }
};
