import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem as Item,
} from "@mui/material";
import { CheckBox, CheckBoxOutlined, AddBox } from "@mui/icons-material";
import React from "react";
import { MenuItem } from "./items";
import colors from "../../../styles/colors";

interface Props {
  items: MenuItem[];
  selectedItem: (item: MenuItem) => void;
}

const MenuItems: React.FC<Props> = ({ items, selectedItem }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (item: MenuItem) => {
    selectedItem(item);
    setAnchorEl(null);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <div className="flex flex-row gap-1 items-center">
          <AddBox sx={{ color: colors.blue }} />
          <span className="font-montserrat text-xs text-gray-700 mr-10">
            Agregar más opciones
          </span>
        </div>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {items.map((item) => (
          <Item onClick={() => handleClose(item)}>
            <ListItemIcon>
              {item.selected ? <CheckBox /> : <CheckBoxOutlined />}
            </ListItemIcon>
            <ListItemText>
              <span className="text-gray-700 font-montserrat font-semibold text-xs">
                {item.title}
              </span>
            </ListItemText>
          </Item>
        ))}
      </Menu>
    </div>
  );
};

export default MenuItems;