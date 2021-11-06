import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";
import { InputText } from "../../../components/input/InputText";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import InputDate from "../../../components/input/InputDate";
import { EmployeeContext } from "../Employee";

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
  const employeeContext = useContext(EmployeeContext);
  const { onBack } = employeeContext;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  
  return (
    <div className="flex flex-col bg-white shadow px-60 py-1 rounded">
     <span className="text-gray-500 font-semibold px-3 py-2 font-montserrat text-xl text-center">
        Información contractual
      </span>
      <div className="h-5"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 px 10 py-1 gap-2">
        
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
  
       
       <InputSelect
           control={control}
           name="Rotation"
           label="Rotación"
           defaultValue=""
           options={Rotation}
           errorMessage={errors?.Rotation?.message}
         />
  
 
      </div>

      <div className="flex flex-1 flex-row justify-around mt-5 gap-2">
        <ButtonOutline onPress={onBack} text="Atrás" />
        <ButtonPrimary onPress={() => {}} text="Guardar" />
      </div>
    </div>
  );
};

export default ContractualInformation;
