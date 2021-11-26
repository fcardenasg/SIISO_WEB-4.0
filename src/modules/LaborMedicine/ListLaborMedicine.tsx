import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { InputText } from "../../components/input/InputText";
import { Attention } from "../../types/AttentionTypes";
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


const listAttention: Attention[] = [
    {
        Codigo: 1,
        Tipo: "TRIAGE",
        Documento: "76543234",
        Fecha: "2021-11-23",
        Atencion: "TRIAGE I",
        EstadoCaso: "string",
        Observaciones: "string",
        Duracion: "string",
        FechaDigitacion: "string",
        NumeroHistoria: "string",
        EstadoPac: "string",
        Sede: "Pribbenow",
        Contingencia: "Enfermedad general",
        Turno: "string",
        DiaTurno: "string",
        Motivo: "string",
        Medico: "string",
        DocSolicitante: "string",
        usuario: "string",
        UsuarioAtiende: "string",
        Talla: "string",
        Peso: "string",
        IMC: "string",
        FechaCierreAtencion: "string",
        UsuarioCierreAtencion: "string",
     
    },
    {
        Codigo: 2,
        Tipo: "ASESORIAS",
        Documento: "765434567",
        Fecha: "2021-11-23",
        Atencion: "Asesoría medica",
        EstadoCaso: "string",
        Observaciones: "string",
        Duracion: "string",
        FechaDigitacion: "string",
        NumeroHistoria: "string",
        EstadoPac: "string",
        Sede: "string",
        Contingencia: "Enfermedad general",
        Turno: "string",
        DiaTurno: "string",
        Motivo: "string",
        Medico: "string",
        DocSolicitante: "string",
        usuario: "string",
        UsuarioAtiende: "string",
        Talla: "string",
        Peso: "string",
        IMC: "string",
        FechaCierreAtencion: "string",
        UsuarioCierreAtencion: "string",
    },
    {
        Codigo: 3,
        Tipo: "EMO",
        Documento: "8765433456",
        Fecha: "2021-11-23",
        Atencion: "Control periodico",
        EstadoCaso: "string",
        Observaciones: "string",
        Duracion: "string",
        FechaDigitacion: "string",
        NumeroHistoria: "string",
        EstadoPac: "string",
        Sede: "string",
        Contingencia: "string",
        Turno: "string",
        DiaTurno: "string",
        Motivo: "string",
        Medico: "string",
        DocSolicitante: "string",
        usuario: "string",
        UsuarioAtiende: "string",
        Talla: "string",
        Peso: "string",
        IMC: "string",
        FechaCierreAtencion: "string",
        UsuarioCierreAtencion: "string",
    },
];

const ListAttention = () => {
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
                    Lista de Medicina Laboral
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
                            onPress={() => history.push("/addLaborMedicine")}
                            text="Nuevo"
                        />
                        <ButtonOutline
                            onPress={() => history.push("/home")}
                            text="Cerrar"
                        />
                    </div>
                </div>
            </div>

            {listAttention.map((attention) => (
                <div className="items-center p-4 gap-4 flex-1 grid grid-cols-5 bg-white rounded shadow-md my-3 gap-x-6 gap-y-3 text-gray-700 text-sm font-montserrat">
                    <div
                        className="bg-red-1 h-10 w-10 text-white text-center 
                        font-extrabold flex items-center justify-center rounded-full"
                    >
                        {attention.Tipo[0]}
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Número de atención: </span>
                        <strong>{attention.Codigo}</strong>

                        <span className="text-xs text-gray-400">Tipo de atención: </span>
                        <strong>{attention.Tipo}</strong>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Nro. documento:</span>
                        <strong>{attention.Documento}</strong>

                        <span className="text-xs text-gray-400">Nombres: </span>
                        <strong>{("Francisco cardenas")}</strong>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Atención: </span>
                        <strong>{attention.Atencion}</strong>

                        <span className="text-xs text-gray-400">Contingencia: </span>
                        <strong>{attention.Contingencia}</strong>
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

export default ListAttention;