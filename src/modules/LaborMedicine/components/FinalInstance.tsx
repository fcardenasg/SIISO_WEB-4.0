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

const FinalInstance = () => {

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col px-10 py-5 rounded p-4">
      <div className="w-full flex justify-center">
        <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
          Registro de Instancia Final
        </span>
      </div>
      { /* Linea roja y texto */}
      <div className="w-full border-b-2 border-red-1 py-2"></div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 py-5">
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
          name="FechaCalificacionOrigen"
          label="Fecha Calificación Origen"
          defaultValue={null}
          errorMessage={errors.FechaCalificacionOrigen?.message}
        />
        <InputSelect
          control={control}
          name="InstanciaOrigen"
          label="Instancia Origen"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.InstanciaOrigen?.message}
        />
        <InputText
          control={control}
          name="PCLFinal "
          label="% PCL Final "
          defaultValue=""
          errorMessage={errors?.PCLFinal?.message}
        />
        <InputText
          control={control}
          name="InstanciaFinal"
          label="Instancia Final"
          defaultValue=""
          errorMessage={errors?.InstanciaFinal?.message}
        />
        <InputDate
          control={control}
          name="FechaCalificacionPCL"
          label="Fecha Calificación PCL"
          defaultValue={null}
          errorMessage={errors.FechaCalificacionPCL?.message}
        />
        <InputDate
          control={control}
          name="FechaEstructuracionPCL"
          label="Fecha Estructuración PCL"
          defaultValue={null}
          errorMessage={errors.FechaEstructuracionPCL?.message}
        />
        <InputSelect
          control={control}
          name="Indemnizado"
          label="Indemnizado"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.Indemnizado?.message}
        />
        <InputDate
          control={control}
          name="FechaPago"
          label="Fecha Pago"
          defaultValue={null}
          errorMessage={errors?.FechaPago?.message}
        />
        <InputSelect
          control={control}
          name="EntregadoAlMIN"
          label="Entregado al MIN"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.EntregadoAlMIN?.message}
        />
        <InputSelect
          control={control}
          name="IndemnizadoRecalificado"
          label="Indemnizado Recalificado"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.IndemnizadoRecalificado?.message}
        />
        <InputDate
          control={control}
          name="FechaPago"
          label="Fecha Pago"
          defaultValue={null}
          errorMessage={errors?.FechaPago?.message}
        />
      </div>
    </div>
  );
};

export default FinalInstance;