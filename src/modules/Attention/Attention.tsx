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

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//Cargar combos
const Tipo: SelectOptions[] = [
  {
    value: "TRIAGE",
    label: "TRIAGE",
  },
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
];

type AttentionForm = {
	Codigo: string;
	Tipo: string;
	Documento: string;
	// Fecha: string;
	Atencion: string;
/* 	EstadoCaso: string;
	Observaciones: string;
	Duracion: string;
	FechaDigitacion: string;
	NumeroHistoria: string;
	EstadoPac: string;
	Sede: string;
	Contingencia: string;
	Turno: string;
	DiaTurno: string;
	Motivo: string;
	Medico: string;
	DocSolicitante: string;
	usuario: string;
	UsuarioAtiende: string;
	Talla: string;
	Peso: string;
	IMC: string;
	FechaCierreAtencion: string;
	UsuarioCierreAtencion: string; */
};

//Validacion de los campos

const schemaValidation: Yup.SchemaOf<AttentionForm> = Yup.object({
  Codigo: Yup.string()
  .required("Este campo es obligatorio")
  .min(3, "Este campo debe tener minimo 3 caracteres"),
  Tipo: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    Documento: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    Atencion: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  /*   EstadoCaso: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    Observaciones: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    Duracion: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    FechaDigitacion: Yup.string().required("Este campo es requerido").nullable(),
    NumeroHistoria: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    EstadoPac: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    Sede: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    Contingencia: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    Turno: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    DiaTurno: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    FechaCierreAtencion: Yup.string().required("Este campo es requerido").nullable(),
    Motivo: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    Medico: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    DocSolicitante: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    usuario: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    UsuarioAtiende: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
    UsuarioCierreAtencion: Yup.string()
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
    .min(3, "Este campo debe tener minimo 3 caracteres"), */
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
    <div className="p-1 flex justify-center items-center">
      <div className="md:w-full xl bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center mb-5">
          <span className="text-gray-600 font-montserrat font-semibold text-lg text-center">
            Registro de Atención
          </span>
        </div>
        {/* Linea roja y texto */}

        <div className="grid grid-cols-2 gap-2">
         
             <InputText
            control={control}
            name="Tipo"
            errorMessage={errors?.Tipo?.message}
            label="Tipo"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Documento"
            errorMessage={errors?.Documento?.message}
            label="Documento"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Atención"
            errorMessage={errors?.Atencion?.message}
            label="Atención"
            defaultValue=""
          />

      
        </div>
        <div className="flex flex-row items-center justify-center">
        <ButtonOutline
            onPress={() => history.push("/Attention")}
            text="Cerrar" />
          <div className="h-3"></div>
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div>

      </div>
    </div>
  );
};

export default Attention;
