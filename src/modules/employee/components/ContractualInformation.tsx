import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import InputDate from "../../../components/input/InputDate";
import { InputText } from "../../../components/input/InputText";
import { ContractualInformationForm } from "../../../types/employeeTypes";
import { employeeForm } from "../../../types/employeeTypes";
import { employeeContext } from "../Employee";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";

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




const ContractualInformation = () => {
  const EmployeeContext = useContext(employeeContext);
  const { onBack } = EmployeeContext;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  
  return (
    <div className="flex flex-col bg-white shadow px-10 py-5 rounded w-full md:w-1/2">
      <span className="text-gray-700 font-semibold font-montserrat text-xl text-center">
        Autorización de Ingreso
      </span>
      <div className="h-5"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputSelect
            control={control}
            name="Type"
            label="Rol"
            defaultValue=""
            options={Types}
            errorMessage={errors?.Type?.message}
          />
          <InputSelect
            control={control}
            name="TipoContrato"
            label="Tipo de contrato"
            defaultValue=""
            options={TypeContract}
            errorMessage={errors?.TipoContrato?.message}
          />
        </div>

        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputDate
          control={control}
          name="FechaContrato"
          label="Fecha de contrato"
          defaultValue={null}
          errorMessage={errors.FechaContrato?.message}
        />
          <InputSelect
            control={control}
            name="RosterPosition"
            label="Roster Position"
            defaultValue=""
            options={RosterPosition}
            errorMessage={errors?.RosterPosition?.message}
          />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
       
        <InputSelect
            control={control}
            name="GeneralPosition"
            label="General Position"
            defaultValue=""
            options={GeneralPosition}
            errorMessage={errors?.GeneralPosition?.message}
          />
          <InputSelect
            control={control}
            name="Departamento"
            label="Departamentos"
            defaultValue=""
            options={Department}
            errorMessage={errors?.Departamento?.message}
          />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
       
       <InputSelect
           control={control}
           name="Area"
           label="Areas"
           defaultValue=""
           options={Area}
           errorMessage={errors?.Area?.message}
         />
         <InputSelect
           control={control}
           name="SubArea"
           label="Subareas"
           defaultValue=""
           options={SubArea}
           errorMessage={errors?.SubArea?.message}
         />
       </div>
       <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
       
       <InputSelect
           control={control}
           name="Grupo"
           label="Grupo"
           defaultValue=""
           options={Grupo}
           errorMessage={errors?.Grupo?.message}
         />
         <InputSelect
           control={control}
           name="Turno"
           label="Turno"
           defaultValue=""
           options={Turno}
           errorMessage={errors?.Turno?.message}
         />
       </div>

       <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
       
       <InputSelect
           control={control}
           name="Rotation"
           label="Rotación"
           defaultValue=""
           options={Rotation}
           errorMessage={errors?.Rotation?.message}
         />
       </div>
 
      </div>
      <div className="flex flex-1 flex-row justify-around mt-5 gap-2">
        <ButtonOutline onPress={onBack} text="Atrás" />
        <ButtonPrimary onPress={() => {}} text="Guardar" />
      </div>
    </div>
  );
};

export default ContractualInformation;
