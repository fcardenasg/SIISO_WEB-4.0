import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { ButtonOutline } from '../../components/buttons/ButtonOutline';
import { ButtonPrimary } from '../../components/buttons/ButtonPrimary';
import { InputText } from '../../components/input/InputText';
import { PersonalInformationForm } from '../../types/EmployeeTypes';
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
import { employeeMock } from "../Employee/dataMockEmployee";

const ListEmployee = () => {
    const {
        control,
        formState: { errors },
    } = useForm();

    const [employees, setemployee] = React.useState(employeeMock);

    const history = useHistory();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

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
                    Lista de Empleados
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
                        <ButtonPrimary onPress={() => history.push('/addEmployee')} text="Nuevo" />
                        <ButtonOutline onPress={() => history.push('/parameterization')} text="Cerrar" />
                    </div>
                </div>
            </div>

            {employees.map((employee) => (
                <div className="flex flex-row bg-white rounded shadow-md my-3">
                    <div className="flex flex-1 flex-row w-full justify-between items-center p-4 gap-7">
                        <div>
                            <img
                                src={employee.ImagenUr}
                                className="w-24 h-24 rounded-full mx-auto"
                                alt=""
                            />
                        </div>
                        <div className="flex-1 grid grid-cols-3 gap-x-6 gap-y-3 text-gray-700 text-sm font-montserrat">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400">Documento: </span>
                                <strong>{employee.Documento}</strong>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400">Empleado:</span>
                                <strong>{employee.Nombres}</strong>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400">Celular: </span>
                                <strong>{employee.Celular}</strong>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400">Correo: </span>
                                <strong>{employee.Email}</strong>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400">Empresa :</span>
                                <strong>{employee.Empresa}</strong>
                            </div>
                            <div className="flex flex-col font-montserrat text-sm">
                                <span className="text-xs text-gray-400">Sede: </span>
                                <strong>{employee.Sede}</strong>
                            </div>
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
                                        <EditIcon />
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
                </div>
            ))}
        </div>
    )
}

export default ListEmployee;