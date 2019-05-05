import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import {
  ServiceTypesList,
  ServiceTypesCreate,
  ServiceTypesEdit
} from "../ServiceTypes/ServicesTypes";

export const adminServiceTypes = {
  key: "servicetypes",
  list: ServiceTypesList,
  create: ServiceTypesCreate,
  edit: ServiceTypesEdit,
  icon: FormatListBulletedIcon,
  options: { label: "Services dictionary" }
};

export const userServiceTypes = {
  key: "servicetypes",
  list: ServiceTypesList,
  icon: FormatListBulletedIcon,
  options: { label: "Services dictionary" }
};
