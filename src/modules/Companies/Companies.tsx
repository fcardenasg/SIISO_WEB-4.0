import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { InputText } from "../../components/input/InputText";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import InputCheck from "../../components/input/InputCheck";

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CompaniesClient, SaveCompanies } from "../../api/clients/CompaniesClient";
import { MessageSuccess } from "../../components/message/MessageSuccess"

export type CompaniesForm = {
  Codigo: string;
  DescripcionSpa: string;
  Email: string;
  Celular: string;
  Gerente: string;
};

//Validacion de los campos
 const schemaValidation: Yup.SchemaOf<CompaniesForm> = Yup.object({
  DescripcionSpa: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Codigo: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Email: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Celular: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Gerente: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),

}); 

interface Props {
  CompaniesClient: CompaniesClient;
}

const Companies: React.FC<Props> = ({ CompaniesClient }) => {

  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompaniesForm>();

  const handleClick = async (form: CompaniesForm) => {
    console.log(form);
    const ReponseCompanies = await SaveCompanies(form);
    MessageSuccess();
  };

  const history = useHistory();

  //mostrar en pantalla
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="md:w-full xl bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center">
          <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
            Registro de Empresas
          </span>
        </div>
        {/* Linea roja y texto */}
        <div className="w-full border-b-2 border-red-1 my-4"></div>
        <div className="grid grid-cols-3 gap-4 my-6">
          <InputText
            control={control}
            name="Codigo"
            errorMessage={errors?.Codigo?.message}
            label="Código"
            defaultValue=""
          />
          <InputText
            control={control}
            name="DescripcionSpa"
            errorMessage={errors?.DescripcionSpa?.message}
            label="Nombre"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Email"
            errorMessage={errors?.Email?.message}
            label="Correo electrónico"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Celular"
            errorMessage={errors?.Celular?.message}
            label="Celular"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Gerente"
            errorMessage={errors?.Gerente?.message}
            label="Contacto"
            defaultValue=""
          />
          
        </div>

        <div className="flex flex-row items-center justify-center">
        <ButtonOutline
            onPress={() => history.push("/Companies")}
            text="Cerrar" />
          <div className="h-3"></div>
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div>
      </div>
    </div >
  );
};

export default Companies;