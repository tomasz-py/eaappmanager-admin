import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import {
  ServiceTypesList,
  ServiceTypesCreate,
  ServiceTypesEdit
} from "../ServiceTypes/ServicesTypes";

export default {
  key: "servicetypes",

  list: ServiceTypesList,
  create: ServiceTypesCreate,
  edit: ServiceTypesEdit,
  icon: FormatListBulletedIcon,
  options: { label: "Services dictionary" }
};
