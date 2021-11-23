import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { InputText } from "../../components/input/InputText";
import { Policy } from "../../types/PolicyTypes";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
    Avatar,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
} from "@material-ui/core";
import {
    ArrowDropDown,
    Logout,
    Person,
} from "@mui/icons-material";

const listPolicy: Policy[] = [
    {
        Idpoliza: "1",
        Numerocontrato: "09012821",
        Idtipopoliza: "Póliza de Cumplimiento del Contrato",
        Numeropoliza: "200",
        idcompaniaseguro: "Allianz seguros S.A.S",
        idintermediario: "1",
        Idcriterio: "2",
        Fechaexpedicion: "2021-02-01",
        Fechainiciopoliza: "2021-02-01",
        Fechafinpoliza: "2021-02-01",
        Valoraseguradp: "1111111",
        Idmoneda: "1",
        Valorprima: "11",
        Idasegurado: "111",
        Idbeneficiario: "11",
        Fecharegistrl: "2021-02-01",
        ImagenUrl: "1",
    },
    {
        Idpoliza: "2",
        Numerocontrato: "062186218",
        Idtipopoliza: "Garantía de Estabilidad de la Obra",
        Numeropoliza: "230",
        idcompaniaseguro: "Axa Colpatria S.A.S",
        idintermediario: "asdsads",
        Idcriterio: "asdsads",
        Fechaexpedicion: "2021-04-05",
        Fechainiciopoliza: "2021-03-13",
        Fechafinpoliza: "2021-05-12",
        Valoraseguradp: "asdsads",
        Idmoneda: "asdsads",
        Valorprima: "asdsads",
        Idasegurado: "asdsads",
        Idbeneficiario: "asdsads",
        Fecharegistrl: "2021-07-13",
        ImagenUrl: "asdsads",
    },
    {
        Idpoliza: "12",
        Numerocontrato: "0822186218",
        Idtipopoliza: "Póliza de Cumplimiento del Contrato",
        Numeropoliza: "232",
        idcompaniaseguro: "Axa Colpatria S.A.S",
        idintermediario: "1",
        Idcriterio: "2",
        Fechaexpedicion: "2021-07-13",
        Fechainiciopoliza: "2021-07-13",
        Fechafinpoliza: "2021-07-13",
        Valoraseguradp: "1111111",
        Idmoneda: "1",
        Valorprima: "11",
        Idasegurado: "111",
        Idbeneficiario: "11",
        Fecharegistrl: "2021-07-13",
        ImagenUrl: "1",
    },
];

const ListPolicy = () => {
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
                    Lista de Proveedores
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
                            onPress={() => history.push("/addPolicy")}
                            text="Nuevo"
                        />
                        <ButtonOutline
                            onPress={() => history.push("/purchases")}
                            text="Cerrar"
                        />
                    </div>
                </div>
            </div>

            {listPolicy.map((policy) => (
                <div className="items-center p-4 gap-4 flex-1 grid grid-cols-5 bg-white rounded shadow-md my-3 gap-x-6 gap-y-3 text-gray-700 text-sm font-montserrat">
                    <div
                        className="bg-red-1 h-10 w-10 text-white text-center 
                        font-extrabold flex items-center justify-center rounded-full"
                    >
                        {policy.idcompaniaseguro[0]}
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Número de Contrato: </span>
                        <strong>{policy.Numerocontrato}</strong>

                        <span className="text-xs text-gray-400">Compañia de Seguro: </span>
                        <strong>{policy.idcompaniaseguro}</strong>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Tipo de Póliza:</span>
                        <strong>{policy.Idtipopoliza}</strong>

                        <span className="text-xs text-gray-400">Número de Póliza: </span>
                        <strong>{policy.Numeropoliza}</strong>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Fecha Inicial: </span>
                        <strong>{policy.Fechainiciopoliza}</strong>

                        <span className="text-xs text-gray-400">Fecha Finalización: </span>
                        <strong>{policy.Fechafinpoliza}</strong>
                    </div>

                    <div className="flex">
                        <button onClick={handleClick}>
                            <MoreVertIcon sx={{ color: "#374151" }} />
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
                                        Editar
                                    </span>
                                </ListItemText>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
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

export default ListPolicy;
