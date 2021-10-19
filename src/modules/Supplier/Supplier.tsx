import React from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../../components/input/InputText";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import InputCheck from "../../components/input/InputCheck";
import InputSelect, { SelectOptions } from "../../components/input/InputSelect";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";


// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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


type SupplierForm = {
  NombProv: string;
  CodiProv: string;
  TeleProv: string;
  EmaiProv: string;
  ContaProv: string;
  CiudProv: string;
  TipoProv: string;
  DireProv: string;
  Estado: boolean;
};

//Validacion de los campos

const schemaValidation: Yup.SchemaOf<SupplierForm> = Yup.object({
  NombProv: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  CodiProv: Yup.string()
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
});

const Supplier = () => {
  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SupplierForm>({
    resolver: yupResolver(schemaValidation),
  });

  const handleClick = (data: SupplierForm) => {
    console.log(data);
  };

  

 
  //mostrar en pantalla
  return (
    <div className="p-1 flex justify-center items-center">
      <div className="md:w-full xl bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center">
          <span className="text-gray-600 font-montserrat font-semibold text-lg text-center">
            Registro de Proveedores
          </span>
        </div>
        {/* Linea roja y texto */}
        <div className="grid grid-cols-2 gap-2">
          <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-5">
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
          </div>
          <div className="border rounded border-red-200 flex flex-col px-4 pt-5">
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
          </div>
          <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-5">
            <InputText
              control={control}
              name="Contacto"
              errorMessage={errors?.ContaProv?.message}
              label="Contacto"
              defaultValue=""
            />
            <InputSelect
              control={control}
              name="Ciudad"
              label="Ciudad"
              defaultValue=""
              options={city}
              errorMessage={errors.CiudProv?.message}
            />
          </div>
          <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-5">
            <InputText
              control={control}
              name="Dirección"
              errorMessage={errors?.DireProv?.message}
              label="Dirección"
              defaultValue=""
            />
           
            {/* Aqui va el chip */}
            
           
          
          </div>
      
          <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-5">
            <InputCheck
              control={control}
              name="Estado"
              label="Estado"
              defaultValue={false}
              errorMessage={errors.Estado?.message}
            />
          </div>
        </div>

        <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        <div className="h-3"></div>
        <Link to="/Parameterization">
          <ButtonOutline onPress={() => {}} text="Cancelar" />
        </Link>
      </div>
    </div>
  );
};
export default Supplier;
