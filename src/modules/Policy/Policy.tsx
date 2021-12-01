import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
//import { store } from "react-notifications-component";

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
import { FormatDate } from "../../components/format/format";

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PolicyClient, SavePolicy } from "../../api/clients/policyClient";
import { date } from "yup/lib/locale";
import { MessageSuccess } from "../../components/message/MessageSuccess"

//Cargar combos
const typepolicy: SelectOptions[] = [
  {
    value: "1",
    label: "Buen Manejo y Correcta Inversión del Anticipo",
  },
  {
    value: "2",
    label: "Póliza de Cumplimiento del Contrato",
  },
  {
    value: "3",
    label: "Pago de Salarios y Prestaciones Sociales e Indemnizaciones",
  },
  {
    value: "4",
    label: "Póliza de Responsabilidad Civil Extra-Contractual",
  },
  {
    value: "5",
    label: "Garantía de Estabilidad de la Obra",
  },
  {
    value: "6",
    label:
      "Póliza por la Calidad del Bien o Correcto Funcionamiento de los Equipos",
  },
];

const Insurancecompany: SelectOptions[] = [
  {
    value: "1",
    label: "Allianz seguros s.a.",
  },
  {
    value: "2",
    label: "Aseguradora Solidaria De Colombia",
  },
  {
    value: "3",
    label: "Axa Colpatria seguros s.a.",
  },
];

const criteria: SelectOptions[] = [
  {
    value: "1",
    label: "% del valor total del contrato",
  },
  {
    value: "2",
    label: " Monto fijo",
  },
];

const intermediary: SelectOptions[] = [
  {
    value: "1",
    label: "HHHHHHHH",
  },
  {
    value: "2",
    label: "LOLOLO",
  },
  {
    value: "3",
    label: "KIKO",
  },
];

const currency: SelectOptions[] = [
  {
    value: "1",
    label: "COP",
  },
  {
    value: "2",
    label: "USD",
  },
];

const insured: SelectOptions[] = [
  {
    value: "1",
    label: "ABCDEF",
  },
  {
    value: "2",
    label: "BGVFCDXS",
  },
  {
    value: "3",
    label: "JUHYGTFR",
  },
];

const beneficiary: SelectOptions[] = [
  {
    value: "1",
    label: "Santiago Cardenas",
  },
  {
    value: "2",
    label: "Juan cardenas",
  },
  {
    value: "3",
    label: "Francisco cardenas",
  },
];

export type PolicyForm = {
  Numerocontrato: string;
  Idtipopoliza: string;
  Numeropoliza: string;
  idcompaniaseguro: string;
  IdIntermediario: string;
  Idcriterio: string;
  Fechaexpedicion: string;
  Fechainiciopoliza: string;
  Fechafinpoliza: string;
  Valoraseguradp: string;
  Idmoneda: string;
  Valorprima: string;
  Idasegurado: string;
  Idbeneficiario: string;
  ImagenUrl: string;
};

//Validacion de los campos
const schemaValidation: Yup.SchemaOf<PolicyForm> = Yup.object({
  Numerocontrato: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Idtipopoliza: Yup.string().required("Este campo es obligatorio"),
  Numeropoliza: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  idcompaniaseguro: Yup.string().required("Este campo es obligatorio"),
  IdIntermediario: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Idcriterio: Yup.string().required("Este campo es obligatorio"),
  Valoraseguradp: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Fechaexpedicion: Yup.string().required("Este campo es requerido").nullable(),
  Fechainiciopoliza: Yup.string()
    .required("Este campo es requerido")
    .nullable(),
  Fechafinpoliza: Yup.string().required("Este campo es requerido").nullable(),
  Idmoneda: Yup.string().required("Este campo es obligatorio"),
  Valorprima: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Idasegurado: Yup.string().required("Este campo es obligatorio"),
  Idbeneficiario: Yup.string().required("Este campo es obligatorio"),
  Fecharegistrl: Yup.string().required("Este campo es requerido").nullable(),
  ImagenUrl: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
});

interface Props {
  policyClient: PolicyClient;
}

const Policy: React.FC<Props> = ({ policyClient }) => {
  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<PolicyForm>();

  const handleClick = async (form: PolicyForm) => {
    console.log(form);
    const FechaExpedicion = FormatDate(form.Fechaexpedicion);
    const FechaFinPoliza = FormatDate(form.Fechafinpoliza);
    const FechaInicioPoliza = FormatDate(form.Fechainiciopoliza);
    let Data: PolicyForm = {
      Numerocontrato: form.Numerocontrato,
      Idtipopoliza: form.Idtipopoliza,
      Numeropoliza: form.Numeropoliza,
      idcompaniaseguro: form.idcompaniaseguro,
      IdIntermediario: form.IdIntermediario,
      Idcriterio: form.Idcriterio,
      Fechaexpedicion: FechaExpedicion,
      Fechainiciopoliza: FechaInicioPoliza,
      Fechafinpoliza: FechaFinPoliza,
      Valoraseguradp: form.Valoraseguradp,
      Idmoneda: form.Idmoneda,
      Valorprima: form.Valorprima,
      Idasegurado: form.Idasegurado,
      Idbeneficiario: form.Idbeneficiario,
      ImagenUrl: form.ImagenUrl,
    };
    const ResponsePolicy = SavePolicy(Data);
    MessageSuccess();
  };

  const history = useHistory();
  //mostrar en pantalla
  return (
    <div className="p-1 flex justify-center items-center">
      <div className="md:w-full xl bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center mb-1">
          <span className="text-gray-600 font-montserrat font-semibold text-lg text-center">
            Registro de Pólizas
          </span>
        </div>
        {/* Linea roja y texto */}

        <div className="grid grid-cols-3 gap-2">
          <InputText
            control={control}
            name="Numerocontrato"
            label="# de Contrato"
            defaultValue=""
            errorMessage={errors?.Numerocontrato?.message}
          />
          <InputSelect
            control={control}
            name="Idtipopoliza"
            label="Tipo de póliza"
            defaultValue=""
            options={typepolicy}
            errorMessage={errors.Idtipopoliza?.message}
          />
          <InputText
            control={control}
            name="Numeropoliza"
            label="# de Póliza"
            defaultValue=""
            errorMessage={errors?.Numeropoliza?.message}
          />

          <InputSelect
            control={control}
            name="idcompaniaseguro"
            label="Compañía de seguros"
            defaultValue=""
            options={Insurancecompany}
            errorMessage={errors.idcompaniaseguro?.message}
          />

          <InputText
            control={control}
            name="IdIntermediario"
            label="Intermediario de seguros"
            defaultValue=""
            errorMessage={errors?.IdIntermediario?.message}
          />
          <InputSelect
            control={control}
            name="Idcriterio"
            label="Criterio"
            defaultValue=""
            options={criteria}
            errorMessage={errors.Idcriterio?.message}
          />
          <InputDate
            control={control}
            name="Fechaexpedicion"
            label="Fecha de expedición"
            defaultValue={null}
            errorMessage={errors.Fechaexpedicion?.message}
          />
          <InputDate
            control={control}
            name="Fechainiciopoliza"
            label="Fecha inicio"
            defaultValue={null}
            errorMessage={errors.Fechainiciopoliza?.message}
          />
          <InputDate
            control={control}
            name="Fechafinpoliza"
            label="Fecha fin"
            defaultValue={null}
            errorMessage={errors.Fechafinpoliza?.message}
          />
          <InputText
            control={control}
            name="Valoraseguradp"
            label="Valor asegurado"
            defaultValue=""
            errorMessage={errors?.Valoraseguradp?.message}
          />
          <InputSelect
            control={control}
            name="Idmoneda"
            label="Moneda"
            defaultValue=""
            options={currency}
            errorMessage={errors.Idmoneda?.message}
          />
          <InputText
            control={control}
            name="Valorprima"
            label="Valor Prima cop $"
            defaultValue=""
            errorMessage={errors?.Valorprima?.message}
          />
          <InputSelect
            control={control}
            name="Idasegurado"
            label="Asegurado"
            defaultValue=""
            options={insured}
            errorMessage={errors.Idasegurado?.message}
          />
          <InputSelect
            control={control}
            name="Idbeneficiario"
            label="Beneficiario"
            defaultValue=""
            options={beneficiary}
            errorMessage={errors.Idbeneficiario?.message}
          />
          <InputText
            control={control}
            name="ImagenUrl"
            label="Anexar documento"
            defaultValue=""
            errorMessage={errors?.ImagenUrl?.message}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <ButtonOutline
            onPress={() => history.push("/Policy")}
            text="Cerrar"
          />
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div>
      </div>
    </div>
  );
};

export default Policy;