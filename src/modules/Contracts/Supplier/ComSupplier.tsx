import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router"
import { InputText } from "../../../components/input/InputText";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import InputCheck from "../../../components/input/InputCheck";
import InputSelect, { SelectOptions } from "../../../components/input/InputSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import InputDate from "../../../components/input/InputDate";

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MessageSuccess } from "../../../components/message/MessageSuccess"

//Cargar combos
const Class: SelectOptions[] = [
  {
    value: "C",
    label: "C",
  },
  {
    value: "D",
    label: "D",
  },
 
];

const contry: SelectOptions[] = [
  {
    value: "Colombia",
    label: "Colombia",
  },
  {
    value: "USA",
    label: "USA",
  },

];
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
const department: SelectOptions[] = [
  {
    value: "Cesar",
    label: "Cesar",
  },
  {
    value: "Atlantico",
    label: "Atlantico",
  },
  {
    value: "Magdalena",
    label: "Magdalena",
  },
];
const Estatus: SelectOptions[] = [
  {
    value: "Cleared",
    label: "Cleared",
  },
  {
    value: "Review",
    label: "Review",
  },
  {
    value: "Valid",
    label: "Valid",
  },
];
const oldseller: SelectOptions[] = [
  {
    value: "9898998",
    label: "Francisco cardenas",
  },
  {
    value: "44444444",
    label: "Angelica angarita",
  },
  {
    value: "77777777",
    label: "Juan pablo cardenas",
  },
];

export type ComSupplierForm = {
  CodiProv: number;
  NombProv: string;
  TeleProv: string;
  EmaiProv: string;
  ContaProv: string;
  DireProv: string;
  ClasProv: string;
	OldvProv: string;
	EstaProv: string;
	FeesProv: string;
	PaisProv: string;
	DepaProv: string;
  CiudProv: number;
	PostProv: string;
  Estado: boolean;
};

//Validacion de los campos


const ComSupplier = () => {
  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ComSupplierForm>();
 

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

  const handleClick = (data: ComSupplierForm) => {
    console.log(data);
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
        <div className="grid grid-cols-3 gap-2">
          <InputText
            control={control}
            name="Código"
            errorMessage={errors?.CodiProv?.message}
            label="Código"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Nombre"
            errorMessage={errors?.NombProv?.message}
            label="Nombre"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Celular"
            errorMessage={errors?.TeleProv?.message}
            label="Celular"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Correo electrónico"
            errorMessage={errors?.EmaiProv?.message}
            label="Correo electrónico"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Contacto"
            errorMessage={errors?.ContaProv?.message}
            label="Contacto"
            defaultValue=""
          />
            <InputText
            control={control}
            name="Dirección"
            errorMessage={errors?.DireProv?.message}
            label="Dirección"
            defaultValue=""
          />
              <InputSelect
            control={control}
            name="Clase"
            label="Clase"
            defaultValue=""
            options={Class}
            errorMessage={errors. ClasProv?.message}
          />
         
     
         <InputText
            control={control}
            name="Antiguo vendedor #"
            errorMessage={errors?.OldvProv?.message}
            label="Antiguo vendedor #"
            defaultValue=""
          />

            <InputSelect
            control={control}
            name="Estado de Fin Sanc"
            label="Estado de Fin Sanc"
            defaultValue=""
            options={Estatus}
            errorMessage={errors.EstaProv?.message}
          />

         <InputDate
        control={control}
        name="Sanc Estado Dt"
        label="Sanc Estado Dt"
        defaultValue={null}
        errorMessage={errors.FeesProv?.message}
      />
           <InputSelect
            control={control}
            name="País"
            label="País"
            defaultValue=""
            options={contry}
            errorMessage={errors.PaisProv?.message}
          />
           <InputSelect
            control={control}
            name="Departamento"
            label="Departamento"
            defaultValue=""
            options={department}
            errorMessage={errors.DepaProv?.message}
          />
          <InputSelect
            control={control}
            name="Ciudad"
            label="Ciudad"
            defaultValue=""
            options={city}
            errorMessage={errors.CiudProv?.message}
          />
        
  
          <InputCheck
            control={control}
            name="Estado"
            label="Estado"
            defaultValue={false}
            errorMessage={errors.Estado?.message}
          />

        </div>
        <div className="flex flex-row items-center justify-center">
          <ButtonOutline onPress={() => history.push('/ComCatalog')} text="Cerrar" />
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div>
      </div>
    </div>
  );
};
export default ComSupplier;
