import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
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
import Checkbox from "@mui/material/Checkbox";
import InputDate from "../../components/input/InputDate";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import { useState } from 'react'
import { Tab } from '@headlessui/react'

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//Cargar combos
const Tipo: SelectOptions[] = [
  {
    value: "Asesorias",
    label: "Asesorias",
  },
  {
    value: "Enfermeria",
    label: "Enfermeria",
  },
  {
    value: "EMO",
    label: "EMO",
  },
  {
    value: "Paraclinicos",
    label: "Paraclinicos",
  },
  {
    value: "TRIAGE",
    label: "TRIAGE",
  },
];

//Cargar combos
const Atencion: SelectOptions[] = [
  {
    value: "Asesoría medica",
    label: "Asesoría medica",
  },
  {
    value: "Asesoría Psicológica",
    label: "Asesoría Psicológica",
  },
  {
    value: "Enfermería ",
    label: "Enfermería",
  },
  {
    value: "Pruebas de alcohol y droga",
    label: "Pruebas de alcohol y droga",
  },
  {
    value: "Ingreso",
    label: "Ingreso",
  },
  {
    value: "Control periódico",
    label: "Control periódico",
  },
  {
    value: "Egreso",
    label: "Egreso",
  },
  {
    value: "TRIAGE I",
    label: "TRIAGE III",
  },
  {
    value: "TRIAGE III",
    label: "TRIAGE III",
  },
  {
    value: "TRIAGE III",
    label: "TRIAGE III",
  },
  {
    value: "TRIAGE IV",
    label: "TRIAGE IV",
  },
];

const Contingencia: SelectOptions[] = [
  {
    value: "Accidente de trabajo",
    label: "Accidente de trabajo",
  },
  {
    value: "Enfermedad general",
    label: "Enfermedad general",
  },
  {
    value: "Enfermedad laboral",
    label: "Enfermedad laboral",
  },
  {
    value: "Licencia de Maternidad / Paternidad",
    label: "Licencia de Maternidad / Paternidad",
  },
  {
    value: "NO AT",
    label: "NO AT",
  },
];


const EstadoCaso: SelectOptions[] = [
  {
    value: "Nuevo",
    label: "Nuevo",
  },
  {
    value: "Control",
    label: "Control",
  },
];

const Turno: SelectOptions[] = [
  {
    value: "Día",
    label: "Día",
  },
  {
    value: "Noche",
    label: "Noche",
  },
];

const DiaTurno: SelectOptions[] = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
];

const Motivo: SelectOptions[] = [
  {
    value: "Administración por póliza ",
    label: "Administración por póliza ",
  },
  {
    value: "Administrativo por ARL",
    label: "Administrativo por ARL",
  },
  {
    value: "Asunto Medico",
    label: "Asunto Medico",
  },
  {
    value: "Conflicto de pareja",
    label: "Conflicto de pareja",
  },
  {
    value: "Conflictos laborales",
    label: "Conflictos laborales",
  },
];

const Medico: SelectOptions[] = [
  {
    value: "Jose guerra",
    label: "Jose guerra",
  },
  {
    value: "Jorge rivera",
    label: "Jorge rivera",
  },
  {
    value: "Osvaldo díaz",
    label: "Osvaldo díaz",
  },
  {
    value: "Guillermo yanes",
    label: "Guillermo yanes",
  },
  {
    value: "Alfonso campo",
    label: "Alfonso campo",
  },
];

type AttentionForm = {
  Codigo: string;
  Tipo: string;
  Documento: string;
  Fecha: string;
  Atencion: string;
  EstadoCaso: string;
  Observaciones: string;
  Duracion: string;
  FechaDigitacion: string;
  Contingencia: string;
  Turno: string;
  DiaTurno: string;
  Motivo: string;
  Medico: string;
  Talla: string;
  Peso: string;
  IMC: string;
  /*   NumeroHistoria: string;
    EstadoPac: string;
    Sede: string;
    DocSolicitante: string;
    usuario: string;
    UsuarioAtiende: string;
    FechaCierreAtencion: string;
    UsuarioCierreAtencion: string;  */
};

//Validacion de los campos

const schemaValidation: Yup.SchemaOf<AttentionForm> = Yup.object({
  Codigo: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Tipo: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Fecha: Yup.string().required("Este campo es requerido").nullable(),
  Documento: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Atencion: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  EstadoCaso: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Observaciones: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Duracion: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  FechaDigitacion: Yup.string().required("Este campo es requerido").nullable(),
  Contingencia: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Turno: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  DiaTurno: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Motivo: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Medico: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Talla: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Peso: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  IMC: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
});

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

const Attention = () => {
  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AttentionForm>({
    resolver: yupResolver(schemaValidation),
  });

  const handleClick = (data: AttentionForm) => {
    console.log(data);
  };

  const history = useHistory();

  const [personName, setPersonName] = React.useState<string[]>([]);


  //mostrar en pantalla
  return (
    <div className="py-1 flex justify-center">
      <div className="md:w-full xl bg-white rounded shadow py-3 px-5">
        <div className="w-full flex justify-center mb-5">
          <span className="text-gray-600 font-montserrat font-semibold text-lg text-center">
            Registro de Atención
          </span>
        </div>
        {/* Linea roja y texto */}

        <div className="grid grid-cols-4 gap-1">
          <InputText
            control={control}
            name="Documento"
            errorMessage={errors?.Documento?.message}
            label="Documento"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Nombres"
            label="Nombres"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Area"
            label="Area"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Roster Position"
            label="Roster Position"
            defaultValue=""
          />
        </div>
        <div className="py-1 flex justify-center">
          <div className="md:w-full xl rounded py-3 px-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-600 bg-gray-200 rounded-lg  hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>Ver mas?</span>
                    <ChevronUpIcon
                      className={`${open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-red-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-4 gap-2 px-4 pt-4 pb-2 text-sm text-red-600">

                    <InputText
                      control={control}
                      name="Edad"
                      label="Edad"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="Celular"
                      label="Celular"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="Correo Electronico"
                      label="Correo Electronico"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="Estado Civil"
                      label="Estado Civil"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="Sede"
                      label="Sede"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="Tipo Contrato"
                      label="Tipo Contrato"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="Fecha Contrato"
                      label="Fecha Contrato"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="Departamento"
                      label="Departamento"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="SubArea"
                      label="SubArea"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="Grupo"
                      label="Grupo"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="Type"
                      label="Type"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="Turno"
                      label="Turno"
                      defaultValue=""
                    />
                    <InputText
                      control={control}
                      name="EPS"
                      label="EPS"
                      defaultValue=""
                    />

                    <InputText
                      control={control}
                      name="AFP"
                      label="AFP"
                      defaultValue=""
                    />

                    <InputText
                      control={control}
                      name="Departamento Nacimiento"
                      label="Departamento Nacimiento"
                      defaultValue=""
                    />

                    <InputText
                      control={control}
                      name="Ciudad Nacimiento"
                      label="Ciudad Nacimiento"
                      defaultValue=""
                    />

                    <InputText
                      control={control}
                      name="Departamento Residencia"
                      label="Departamento Residencia"
                      defaultValue=""
                    />

                    <InputText
                      control={control}
                      name="Ciudad Residencia"
                      label="Ciudad Residencia"
                      defaultValue=""
                    />

                    <InputText
                      control={control}
                      name="Dirección Residencia"
                      label="Dirección Residencia"
                      defaultValue=""
                    />

                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <ButtonOutline
            onPress={() => history.push("/LaborMedicine")}
            text="Cerrar" />
          <div className="h-3"></div>
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div>

      </div>
    </div>
  );
};

export default Attention;