import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { InputText } from "../../components/input/InputText";
import { Catalog } from "../../types/CatalogTypes";
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
import { GetAllCatalog } from "../../api/clients/CatalogClient";
import buildCatalogClient from '../../api/clients/CatalogClient';

const clientHttp = buildCatalogClient()

const ListCatalog = () => {
    const CatalogArray: Catalog[] = [];
    const [lsCatalog, setLsCatalog] = useState(CatalogArray);

    async function GetAll() {
        const lsCatalogsServer = await GetAllCatalog(0, 5);
        setLsCatalog(lsCatalogsServer.entities);
    }

    useEffect(() => {
        GetAll();
    }, []);

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

    const handleDelete = async (id: number) => {
        try {
            const { data } = await clientHttp.DeleteCatalog(id);
            await GetAll()
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="p-1">
                <div className="w-full bg-blue-500 shadow rounded p-5 text-sm text-white font-montserrat font-semibold">
                    Lista de Catalogos
                </div>
                <div className="h-5"></div>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                    <InputText
                        control={control}
                        name="busqueda"
                        errorMessage={errors?.busqueda?.message}
                        label="B??squeda"
                        defaultValue=""
                    />
                    <div className="grid grid-cols-2 gap-2">
                        <ButtonPrimary
                            onPress={() => history.push("/addCatalog")}
                            text="Nuevo"
                        />
                        <ButtonOutline
                            onPress={() => history.push("/parameterization")}
                            text="Cerrar"
                        />
                    </div>
                </div>
            </div>

            {lsCatalog.map((catalog: any) => (
                <div className="items-center p-4 gap-4 flex-1 grid grid-cols-5 bg-white rounded shadow-md my-3 gap-x-6 gap-y-3 text-gray-700 text-sm font-montserrat">
                    {console.log(catalog)}
                    <div
                        className="bg-red-1 h-10 w-10 text-white text-center 
                        font-extrabold flex items-center justify-center rounded-full"
                    >
                        {catalog.nombre[0]}
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Tipo de Cat??logo: </span>
                        <strong>{catalog.nameTypeCatalog}</strong>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Nombre: </span>
                        <strong>{catalog.nombre}</strong>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">C??digo: </span>
                        <strong>{catalog.codigo}</strong>
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
                                    <span
                                        onClick={() => handleDelete(catalog.idCatalogo)}
                                        className="text-gray-700 font-montserrat font-semibold text-xs"
                                    >
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

export default ListCatalog;