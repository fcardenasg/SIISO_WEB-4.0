import React from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../../components/input/InputText";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import InputCheck from "../../components/input/InputCheck";

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CompaniesForm = {
  DescripcionSpa: string;
  Codigo: string;
  Email: string;
  Celular: string;
  Gerente: string;
  Estado: boolean;
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
  Estado: Yup.boolean().required(),
});

const Companies = () => {
  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CompaniesForm>({
    resolver: yupResolver(schemaValidation),
  });

  const handleClick = (data: CompaniesForm) => {
    console.log(data);
  };

  //mostrar en pantalla
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="md:w-1/2 bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center">
          <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
            Registro de Empresas
          </span>
        </div>
        {/* Linea roja y texto */}
        <div className="w-full border-b-2 border-red-1 my-4"></div>
        <InputText
          control={control}
          name="Codigo"
          errorMessage={errors?.Codigo?.message}
          label="Código"
          defaultValue=""
        />
        <InputText
          control={control}
          name="Nombre"
          errorMessage={errors?.DescripcionSpa?.message}
          label="Nombre"
          defaultValue=""
        />
        <InputText
          control={control}
          name="Correo electrónico"
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
          name="Contacto"
          errorMessage={errors?.Gerente?.message}
          label="Contacto"
          defaultValue=""
        />

        <InputCheck
          control={control}
          name="Estado"
          label="Estado"
          defaultValue={false}
          errorMessage={errors.Estado?.message}
        />

        <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        <div className="h-3"></div>
        <Link to="/Parameterization">
          <ButtonOutline onPress={() => {}} text="Cancelar" />
        </Link>
      </div>
    </div>
  );
};

export default Companies;
