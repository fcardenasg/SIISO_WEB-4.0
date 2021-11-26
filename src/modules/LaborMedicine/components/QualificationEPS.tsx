import React from 'react'
import { useForm } from "react-hook-form";
import InputDate from "../../../components/input/InputDate";
import { Link } from "react-router-dom";
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

const typeofcatalog: SelectOptions[] = [
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

type QualificationEPSForm = {
  FechaCalificacion: string;
  Origen: string;
};

//Validacion de los campos
const schemaValidation: Yup.SchemaOf<QualificationEPSForm> = Yup.object({
  FechaCalificacion: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Origen: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
});

const QualificationEPS = () => {
  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<QualificationEPSForm>({
    resolver: yupResolver(schemaValidation),
  });

  const handleClick = (data: QualificationEPSForm) => {
    console.log(data);
  };

  //mostrar en pantalla
  return (
    <div className="flex flex-col px-10 py-5 rounded p-4">
      <div className="w-full flex justify-center">
        <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
          Registro de Calificación EPS
        </span>
      </div>
      { /* Linea roja y texto */}
      <div className="w-full border-b-2 border-red-1 my-4 py-1"></div>
      <div className="grid grid-cols-2 gap-4 my-1 py-5">
        <InputDate
          control={control}
          name="FechaCalificacion"
          label="Fecha Calificación"
          defaultValue={null}
          errorMessage={errors.FechaCalificacion?.message}
        />
        <InputSelect
          control={control}
          name="Origen"
          label="Origen"
          defaultValue=""
          options={Objects}
          errorMessage={errors.Origen?.message}
        />
      </div>
    </div>
  );
}

export default QualificationEPS;