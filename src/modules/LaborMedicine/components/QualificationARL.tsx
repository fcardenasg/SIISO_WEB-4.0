import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";
import { InputText } from "../../../components/input/InputText";
import InputDate from "../../../components/input/InputDate";

const Types: SelectOptions[] = [
  {
    value: "H",
    label: "H",
  },
  {
    value: "S",
    label: "S",
  },
];

const TypeContract: SelectOptions[] = [
  {
    value: "E",
    label: "Empleado",
  },
  {
    value: "C",
    label: "Contratista",
  },
  {
    value: "POI",
    label: "Aprendiz sena",
  },
  {
    value: "CWR",
    label: "Temporal",
  },
];
const RosterPosition: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const GeneralPosition: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const Department: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const Area: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const SubArea: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const Grupo: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const Turno: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];
const Rotation: SelectOptions[] = [
  {
    value: "Astrazeneca",
    label: "Astrazeneca",
  },
  {
    value: "Moderna",
    label: "Moderna",
  },
  {
    value: "Sinovac",
    label: "Sinovac",
  },
  {
    value: "Pfizer",
    label: "Pfizer",
  },
];

const QualificationARL = () => {

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col px-10 py-5 rounded p-4">
      <div className="w-full flex justify-center">
        <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
          Registro de Calificación ARL
        </span>
      </div>
      { /* Linea roja y texto */}
      <div className="w-full border-b-2 border-red-1 py-2"></div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 py-5">
        <InputText
          control={control}
          name="NroSolicitud"
          label="Nro. Solicitud"
          defaultValue=""
          errorMessage={errors?.NroSolicitud?.message}
        />
        <InputDate
          control={control}
          name="FechaCalificacionOrigen"
          label="Fecha Calificación Origen"
          defaultValue={null}
          errorMessage={errors.FechaCalificacionOrigen?.message}
        />
        <InputSelect
          control={control}
          name="Origen"
          label="Origen"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.Origen?.message}
        />
        <InputDate
          control={control}
          name="FechaCalificacionPCL"
          label="Fecha Calificación PCL"
          defaultValue={null}
          errorMessage={errors.FechaCalificacionPCL?.message}
        />
        <InputText
          control={control}
          name="PCL"
          label="% PCL"
          defaultValue=""
          errorMessage={errors?.PCL?.message}
        />
        <InputDate
          control={control}
          name="FechaEstructura"
          label="Fecha Estructura"
          defaultValue={null}
          errorMessage={errors.FechaEstructura?.message}
        />
        <InputDate
          control={control}
          name="FechaReCalificacionPCL"
          label="Fecha ReCalificación PCL"
          defaultValue={null}
          errorMessage={errors.FechaReCalificacionPCL?.message}
        />
        <InputText
          control={control}
          name="PCLRecalificada"
          label="% PCL Recalificada"
          defaultValue=""
          errorMessage={errors?.PCLRecalificada?.message}
        />
        <InputDate
          control={control}
          name="FechaEstructura"
          label="Fecha Estructura"
          defaultValue={null}
          errorMessage={errors.FechaEstructura?.message}
        />
      </div>
    </div>
  );
};

export default QualificationARL;