import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { InputText } from "../../components/input/InputText";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import InputCheck from "../../components/input/InputCheck";
import InputSelect, { SelectOptions } from "../../components/input/InputSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
/* import Checkbox from "@mui/material/Checkbox"; */

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SupplierClient, SaveSupplier } from "../../api/clients/SupplierClient";
import { MessageSuccess } from "../../components/message/MessageSuccess"

//Cargar combos
const city: SelectOptions[] = [
  {
    value: "Valledupar",
    label: "Valledupar",
  },
  {
    value: "Barranquilla",
    label: "Barranquilla",
  },
  {
    value: "Santa Marta",
    label: "Santa Marta",
  },
];

export type SupplierForm = {
  CodiProv: string;
  NombProv: string;
  TeleProv: string;
  EmaiProv: string;
  ContaProv: string;
  CiudProv: number;
  TipoProv: number;
  DireProv: string;
};

//Validacion de los campos
/* const schemaValidation: Yup.SchemaOf<SupplierForm> = Yup.object({
  CodiProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  NombProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  CeluProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  EmaiProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  ContaProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  CiudProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  TipoProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  DireProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Estado: Yup.boolean().required(),
}); */

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

interface Props {
  SupplierClient: SupplierClient;
}

const Supplier: React.FC<Props> = ({ SupplierClient }) => {
  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SupplierForm>();

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleClick = (form: SupplierForm) => {
    console.log(form);
    let Data: SupplierForm = {
      CodiProv: form.CodiProv,
      NombProv: form.NombProv,
      TeleProv: form.TeleProv,
      EmaiProv: form.EmaiProv,
      ContaProv: form.ContaProv,
      CiudProv: 12,
      TipoProv: 4,
      DireProv: form.DireProv,
    };
    const ResponseSupplier = SaveSupplier(Data);
    MessageSuccess();
  };

  const history = useHistory();
  //mostrar en pantalla
  return (
    <div className="p-1 flex justify-center items-center">
      <div className="md:w-full xl bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center mb-5">
          <span className="text-gray-600 font-montserrat font-semibold text-lg text-center">
            Registro de Proveedores
          </span>
        </div>
        {/* Linea roja y texto */}
        <div className="grid grid-cols-2 gap-2">
          <InputText
            control={control}
            name="CodiProv"
            errorMessage={errors?.CodiProv?.message}
            label="Código"
            defaultValue=""
          />
          <InputText
            control={control}
            name="NombProv"
            errorMessage={errors?.NombProv?.message}
            label="Nombre"
            defaultValue=""
          />
          <InputText
            control={control}
            name="TeleProv"
            errorMessage={errors?.TeleProv?.message}
            label="Celular"
            defaultValue=""
          />
          <InputText
            control={control}
            name="EmaiProv"
            errorMessage={errors?.EmaiProv?.message}
            label="Correo electrónico"
            defaultValue=""
          />
          <InputText
            control={control}
            name="ContaProv"
            errorMessage={errors?.ContaProv?.message}
            label="Contacto"
            defaultValue=""
          />
          <InputSelect
            control={control}
            name="CiudProv"
            label="Ciudad"
            defaultValue=""
            options={city}
            errorMessage={errors.CiudProv?.message}
          />
          <InputText
            control={control}
            name="DireProv"
            errorMessage={errors?.DireProv?.message}
            label="Dirección"
            defaultValue=""
          />
          <InputSelect
            control={control}
            name="TipoProv"
            label="Tipo de servicio"
            defaultValue=""
            options={city}
            errorMessage={errors.TipoProv?.message}
          />

          {/* <FormControl sx={{ m: 1, width: '100%' }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
        </div>
        <div className="flex flex-row items-center justify-center">
          <ButtonOutline onPress={() => history.push('/Supplier')} text="Cerrar" />
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div>
      </div>
    </div>
  );
};

export default Supplier;