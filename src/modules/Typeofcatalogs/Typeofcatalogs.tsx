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

interface Props {
  closeModal:  () => void;
}

type TypeofcatalogsForm = {
  Nombre: string;
};

//Validacion de los campos

const schemaValidation: Yup.SchemaOf<TypeofcatalogsForm> = Yup.object({
  Nombre: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
});

const Typeofcatalogs: React.FC<Props> = ({
  closeModal
}) => {
  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeofcatalogsForm>({
    resolver: yupResolver(schemaValidation),
  });

  const handleClick = (data: TypeofcatalogsForm) => {
    console.log(data);
  };

  //mostrar en pantalla
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <span className="text-gray-500 font-montserrat font-semibold text-lg text-center">
          Registro de Tipo de Catálogos
        </span>
      </div>
      {/* Linea roja y texto */}
      <div className="w-full border-b border-gray-200 my-4"></div>
      <InputText
        control={control}
        name="Nombre"
        errorMessage={errors?.Nombre?.message}
        label="Nombre"
        defaultValue=""
      />

      <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
      <div className="h-3"></div>
      <ButtonOutline onPress={closeModal} text="Cancelar" />
    </div>
  );
};

export default Typeofcatalogs;
