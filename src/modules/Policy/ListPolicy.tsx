import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { InputText } from "../../components/input/InputText";
import { Policy } from "../../types/PolicyTypes";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { GetAllPolicy } from "../../api/clients/policyClient";
import { FormatDate } from "../../components/format/format";

const ListPolicy = () => {
  /* Esto comienza aquí */
  const PolicyArray: Policy[] = [];
  const [lsPolicy, setLsPolicy] = useState(PolicyArray);

  useEffect(() => {
    async function GetAll() {
      const lsPolicyServer = await GetAllPolicy(0, 5);
      setLsPolicy(lsPolicyServer.entities);
    }
    GetAll();
  }, []);
  /* Hasta aquí */

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
          Lista de Polizas
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

      {lsPolicy.map((policy: any) => (
        <div className="items-center p-4 gap-4 flex-1 grid grid-cols-5 bg-white rounded shadow-md my-3 gap-x-6 gap-y-3 text-gray-700 text-sm font-montserrat">
          {console.log(policy)}
          <div
            className="bg-red-1 h-10 w-10 text-white text-center 
                        font-extrabold flex items-center justify-center rounded-full"
          >
            {policy.idCompaniaSeguro}
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Número de Contrato: </span>
            <strong>{policy.numeroContrato}</strong>

            <span className="text-xs text-gray-400">Compañia de Seguro: </span>
            <strong>{policy.idCompaniaSeguro}</strong>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Tipo de Póliza:</span>
            <strong>{policy.idTipoPoliza}</strong>

            <span className="text-xs text-gray-400">Número de Póliza: </span>
            <strong>{policy.numeroPoliza}</strong>
          </div>

          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Fecha Inicial: </span>
            <strong>{FormatDate(policy.fechaInicioPoliza)}</strong>

            <span className="text-xs text-gray-400">Fecha Finalización: </span>
            <strong>{FormatDate(policy.fechaFinPoliza)}</strong>
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
      ))}
    </div>
  );
};

export default ListPolicy;