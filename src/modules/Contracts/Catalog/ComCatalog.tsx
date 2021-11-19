import React from 'react'
import { useForm } from "react-hook-form";
import { InputText } from "../../../components/input/InputText";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import InputCheck from "../../../components/input/InputCheck";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";


// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//Cargar combos
const Objects: SelectOptions[] = [
  {
    value: "Catalogo",
    label: "Catalogo",
  },
  {
    value: "Encriptación",
    label: "Encriptación",
  },
  {
    value: "Tipo de Menu",
    label: "Tipo de Menu",
  },

];

const Comtypeofcatalog: SelectOptions[] = [
  {
    value: "Genero",
    label: "Genero",
  },
  {
    value: "EPS",
    label: "EPS",
  },
  {
    value: "ARL",
    label: "ARL",
  },

];



type ComCatalogForm = {
    Nombre: string;
    Codigo: string;
    IdTipoCatalogo: string;
    IdObjeto: string;
    Estado : boolean;
};


//Validacion de los campos

const schemaValidation: Yup.SchemaOf<ComCatalogForm> = Yup.object({
    Nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        Codigo: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        IdTipoCatalogo: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        IdObjeto: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
        Estado: Yup.boolean().required(),
});


const ComCatalog = () => {
    //Crear formulario para validar
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ComCatalogForm>({
        resolver: yupResolver(schemaValidation),
    });

    const handleClick = (data: ComCatalogForm) => {
        console.log(data);
    };


   //mostrar en pantalla
   return (
    <div className="p-10 flex justify-center items-center">
      <div className="md:w-1/2 bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center">
          <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
            Registro de Catálogos
          </span>
        </div>
      { /* Linea roja y texto */}
        <div className="w-full border-b-2 border-red-1 my-4"></div>
        <InputSelect
        control={control}
        name="IdObjeto"
        label="Objeto"
        defaultValue=""
        options={Objects}
        errorMessage={errors.IdObjeto?.message}
      />
         <InputSelect
        control={control}
        name="IdTipoCatalogo"
        label="Tipo Catálogo"
        defaultValue=""
        options={Comtypeofcatalog}
        errorMessage={errors.IdTipoCatalogo?.message}
      />

        <InputText
          control={control}
          name="Nombre"
          errorMessage={errors?.Nombre?.message}
          label="Nombre"
          defaultValue=""
        />

        <InputText
          control={control}
          name="Código"
          errorMessage={errors?.Codigo?.message}
          label="Código"
          defaultValue=""
        />
        <InputCheck
        control={control}
        name="Estado"
        label="Estado"
        defaultValue={false}
        errorMessage={errors.Estado?.message}
        />

        <div className="flex flex-row items-center justify-center">
          <ButtonOutline onPress={() => {}} text="Cancelar" />
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div>
        
        
        {/* <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        <div className="h-3"></div>
        <Link to="HomeScreenpurchases">
          <ButtonOutline onPress={() => {}} text="Cancelar" />
        </Link> */}
        
      </div>
    </div>
  );


}

export default ComCatalog
