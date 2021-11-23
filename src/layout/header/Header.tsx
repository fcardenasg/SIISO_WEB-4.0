import {
  Avatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import {
  ArrowDropDown,
  ImportantDevices,
  Logout,
  Person,
  VideoCall,
} from "@mui/icons-material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import authContext from "../../providers/authContext";
import colors from "../../styles/colors";

export const Header = () => {
  const { user } = useContext(authContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex w-full h-24 flex-row items-center border-b border-red-1">
      <div>
        <span className="text-2xl font-montserrat text-gray-700 font-semibold">
          ¡Hola, {user?.name}{" "}!
        </span>
      </div>
      <div className="flex flex-row flex-1 gap-8 justify-end items-center">
        <div>
          <Link to="">
            <VideoCall sx={{ color: "#26832C", fontSize: 40 }} />
          </Link>
        </div>
        <div>
          <Link to="">
            <ImportantDevices sx={{ color: "#3374FF", fontSize: 30 }} />
          </Link>
        </div>
        <div>
          <button onClick={handleClick}>
            <div className="flex flex-row gap-2 items-center">
              <div>
                <Avatar sx={{ bgcolor: colors.primary, width: 32, height: 32 }}>
                  <span className="text-sm">{user?.name[0]}</span>
                </Avatar>
              </div>
              <div className="flex flex-col text-gray-700 text-left text-xs font-semibold font-montserrat">
                <span>
                  {user?.name} {user?.lastname}
                </span>
                <span>@{user?.user}</span>
              </div>
              <div>
                <ArrowDropDown sx={{ color: "#374151" }} />
              </div>
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
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <span className="text-gray-700 font-montserrat font-semibold text-xs">
                  Mi Perfil
                </span>
              </ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <ListItemText>
                <span className="text-gray-700 font-montserrat font-semibold text-xs">
                  Cerrar Sesión
                </span>
              </ListItemText>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};