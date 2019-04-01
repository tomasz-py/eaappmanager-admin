import FolderSharedIcon from "@material-ui/icons/FolderShared";
import { ClientsList, ClientsCreate, ClientsEdit } from "../Clients/Clients";

export default {
  key: "clients",
  list: ClientsList,
  create: ClientsCreate,
  edit: ClientsEdit,
  icon: FolderSharedIcon,
  options: { label: "Clients" }
};
