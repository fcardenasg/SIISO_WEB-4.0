import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import { InputText } from "../../../components/input/InputText";
import { ComTypeofcatalog } from "../../../types/ComTypeofcatalogsType";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
    IconButton,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

const listComTypeofcatalogs: ComTypeofcatalog[] = [
    {
        idTipoCatalogo: 1010,
        nombre: "ARL"
    },
    {
        idTipoCatalogo: 1010,
        nombre: "ARL"
    },
    {
        idTipoCatalogo: 1010,
        nombre: "ARL"
    },
    {
        idTipoCatalogo: 1010,
        nombre: "ARL"
    },
];

const ListComTypeofcatalogs = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const {
        control,
        formState: { errors },
    } = useForm();

    const history = useHistory();

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div>
            <div className="p-1">
                <div className="w-full bg-blue-500 shadow rounded p-5 text-sm text-white font-montserrat font-semibold">
                    Lista de Tipo de Cátalogo
                </div>
                <div className="h-5"></div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                    <InputText
                        control={control}
                        name="busqueda"
                        errorMessage={errors?.busqueda?.message}
                        label="Búsqueda"
                        defaultValue=""
                    />
                    <div className="grid grid-cols-2 gap-2">
                        <ButtonPrimary
                            onPress={() => history.push("/addComTypeofcatalogs")}
                            text="Nuevo"
                        />
                        <ButtonOutline
                            onPress={() => history.push("/purchases")}
                            text="Cerrar"
                        />
                    </div>
                </div>
            </div>

            {listComTypeofcatalogs.map((comtypoofcatalogs) => (
                <div className="items-center p-4 gap-4 flex-1 grid grid-cols-3 bg-white rounded shadow-md my-3 gap-x-6 gap-y-3 text-gray-700 text-sm font-montserrat">
                    <div
                        className="bg-red-1 h-10 w-10 text-white text-center 
                        font-extrabold flex items-center justify-center rounded-full"
                    >
                        {comtypoofcatalogs.nombre[0]}
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Nombre: </span>
                        <strong>{comtypoofcatalogs.nombre}</strong>
                    </div>

                    <div className="flex">
                        <button onClick={handleClick}>
                            <MoreVertSharpIcon sx={{ color: "#374151" }} />
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
                                    <EditIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>
                                    <span className="text-gray-700 font-montserrat font-semibold text-xs">
                                        Editar
                                    </span>
                                </ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <DeleteIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>
                                    <span className="text-gray-700 font-montserrat font-semibold text-xs">
                                        Eliminar
                                    </span>
                                </ListItemText>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListComTypeofcatalogs;