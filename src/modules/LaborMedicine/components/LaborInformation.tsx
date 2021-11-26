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

const LaborInformation = () => {

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col px-10 py-5 rounded">
      <div className="w-full flex justify-center">
        <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
          Registro de Información Laboral
        </span>
      </div>
      { /* Linea roja y texto */}
      <div className="w-full border-b-2 border-red-1 py-2"></div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 py-4">
        <InputSelect
          control={control}
          name="SituacionContractual"
          label="Situación Contractual"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.SituacionContractual?.message}
        />
        <InputSelect
          control={control}
          name="ResumenCaso"
          label="Resumen Caso"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.ResumenCaso?.message}
        />
        <InputSelect
          control={control}
          name="SituaciondelEmpleado"
          label="Situación del Empleado"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.SituaciondelEmpleado?.message}
        />
        <InputDate
          control={control}
          name="FechaRetiro"
          label="Fecha Retiro"
          defaultValue={null}
          errorMessage={errors.FechaRetiro?.message}
        />
        <InputText
          control={control}
          name="Dx"
          label="Dx"
          defaultValue=""
          errorMessage={errors?.Dx?.message}
        />
        <InputText
          control={control}
          name="Diagnostico"
          label="Diagnostico"
          defaultValue=""
          errorMessage={errors?.Diagnostico?.message}
        />
        <InputText
          control={control}
          name="CodCie10"
          label="Cod Cie10"
          defaultValue=""
          errorMessage={errors?.CodCie10?.message}
        />
        <InputSelect
          control={control}
          name="Diagnostico"
          label="Diagnostico"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.Diagnostico?.message}
        />
        <InputText
          control={control}
          name="NroFurel"
          label="Nro. FUREL"
          defaultValue=""
          errorMessage={errors?.NroFurel?.message}
        />
        <InputSelect
          control={control}
          name="SegmentoAgrupado"
          label="Segmento Agrupado"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.SegmentoAgrupado?.message}
        />
        <InputSelect
          control={control}
          name="SegmentoAfectado"
          label="Segmento Afectado"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.SegmentoAfectado?.message}
        />
        <InputSelect
          control={control}
          name="SubSegmento"
          label="SubSegmento"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.SegmentoAgrupado?.message}
        />
        <InputSelect
          control={control}
          name="Region"
          label="Región"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.Region?.message}
        />
        <InputSelect
          control={control}
          name="Lateralidad"
          label="Lateralidad"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.Lateralidad?.message}
        />
        <InputSelect
          control={control}
          name="Entidadquemotivaelenvio"
          label="Entidad que motiva el envio"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.Entidadquemotivaelenvio?.message}
        />
        <InputSelect
          control={control}
          name="EntidadDondeEnvia"
          label="Entidad Donde Envia"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.EntidadDondeEnvia?.message}
        />
        <InputDate
          control={control}
          name="FechaEntrega"
          label="Fecha Entrega"
          defaultValue={null}
          errorMessage={errors.FechaRetiro?.message}
        />
        <InputDate
          control={control}
          name="FechaEnvio"
          label="Fecha Envio"
          defaultValue={null}
          errorMessage={errors.FechaRetiro?.message}
        />
        <InputSelect
          control={control}
          name="Investigado"
          label="Investigado"
          defaultValue=""
          options={TypeContract}
          errorMessage={errors?.Investigado?.message}
        />
      </div>
      <InputText
        control={control}
        name="Observaciones"
        label="Observaciones"
        defaultValue=""
        errorMessage={errors?.Observaciones?.message}
      />
    </div>
  );
};

export default LaborInformation;