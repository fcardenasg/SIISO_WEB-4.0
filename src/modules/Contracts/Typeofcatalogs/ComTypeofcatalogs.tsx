import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router";
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
import { ComTypeofcatalogsClient, SaveComTypeofcatalogs } from "../../../api/clients/ComTypeofcatalogsClient";

// idTipoCatalogo: number;
// nombre: string;


export type ComTypeofcatalogsForm = {
    Nombre: string;
};


//Validacion de los campos

const schemaValidation: Yup.SchemaOf<ComTypeofcatalogsForm> = Yup.object({
    Nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe tener minimo 3 caracteres"),
});

interface Props {
  ComTypeofcatalogsClient: ComTypeofcatalogsClient;
}

const ComTypeofcatalogs: React.FC<Props> = ({ ComTypeofcatalogsClient }) => {
  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ComTypeofcatalogsForm>();


const handleClick = async (form: ComTypeofcatalogsForm) => {
  console.log(form);
  const ResponsePolicy = await SaveComTypeofcatalogs(form);
  alert("Registro guardado con éxito");
};


const history = useHistory();


   //mostrar en pantalla
   return (
    <div className="p-10 flex justify-center items-center">
      <div className="md:w-1/2 bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center">
          <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
            Registro tipos de catalogo
          </span>
        </div>
      { /* Linea roja y texto */}
        <div className="w-full border-b-2 border-red-1 my-4"></div>
        <InputText
          control={control}
          name="Nombre"
          errorMessage={errors?.Nombre?.message}
          label="Nombre"
          defaultValue=""
        />
        <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        <div className="h-3"></div>
        <Link to="/purchases">
          <ButtonOutline onPress={() => {}} text="Cancelar" />
        </Link>
      </div>
    </div>
  );


}

export default ComTypeofcatalogs
