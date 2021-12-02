import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";
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
import {ComSupplierClient,SaveComSupplier,
} from "../../../api/clients/ComSupplierClient";
//Cargar combos


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
    value: "1",
    label: "Valledupar",
  },
  {
    value: "2",
    label: "Barranquilla",
  },
  {
    value: "3",
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
  CodiProv: string;
  NombProv: string;
  TeleProv: string;
  EmaiProv: string;
  ContaProv: string;
  DireProv: string;
	OldvProv: string;
	PaisProv: string;
	DepaProv: string;
  CiudProv: string;
	PostProv: string;
};


const schemaValidation: Yup.SchemaOf<ComSupplierForm> = Yup.object({
   CodiProv: Yup.string()
  .required("Este campo es obligatorio")
  .min(3, "Este campo debe tener minimo 3 caracteres"),
  NombProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    TeleProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    EmaiProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    ContaProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    DireProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    OldvProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    PaisProv: Yup.string()
    .required("Este campo es obligatorio"),
    DepaProv: Yup.string()
    .required("Este campo es obligatorio"),
    CiudProv: Yup.string()
    .required("Este campo es obligatorio"),
    PostProv: Yup.string()
    .required("Este campo es obligatorio"),
});


interface Props {
  ComSupplierClient: ComSupplierClient;
}


  //Crear formulario para validar
 
  const ComSupplier: React.FC<Props> = ({ ComSupplierClient }) => {
    //Crear formulario para validar
    const {
      control,
      handleSubmit,
      formState: { errors },
      getValues,
    } = useForm<ComSupplierForm>();
  
    const handleClick = async (form: ComSupplierForm) => {
      console.log(form);
      const ResponsePolicy = await SaveComSupplier(form);
      alert("Registro guardado con éxito");
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
            <InputText
            control={control}
            name="DireProv"
            errorMessage={errors?.DireProv?.message}
            label="Dirección"
            defaultValue=""
          />
         <InputText
            control={control}
            name="OldvProv"
            errorMessage={errors?.OldvProv?.message}
            label="Antiguo vendedor #"
            defaultValue=""
          />
           <InputSelect
            control={control}
            name="PaisProv"
            label="País"
            defaultValue=""
            options={contry}
            errorMessage={errors.PaisProv?.message}
          />
           <InputSelect
            control={control}
            name="DepaProv"
            label="Departamento"
            defaultValue=""
            options={department}
            errorMessage={errors.DepaProv?.message}
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
            name="PostProv"
            errorMessage={errors?.PostProv?.message}
            label="Servicios"
            defaultValue=""
          />

        </div>
      {/*   <div className="flex flex-row items-center justify-center">
          <ButtonOutline onPress={() => history.push('/ComSupplier')} text="Cerrar" />
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div> */}

        <div className="flex flex-row items-center justify-center">
          <ButtonOutline
            onPress={() => history.push("/ComSupplier")}
            text="Cerrar"
          />
          <div className="h-3"></div>
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div>

      </div>
    </div>
  );
};
export default ComSupplier;
