import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import { SocialsecurityForm } from "../../../types/employeeTypes";
import { employeeContext } from "../Employee";
import { InputText } from "../../../components/input/InputText";
import { employeeForm } from "../../../types/employeeTypes";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputCheck from "../../../components/input/InputCheck";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";


const Afp: SelectOptions[] = [
  {
    value: "14045",
    label: "Drummond CO",
  },
  {
    value: "1401",
    label: "Drummond LTD",
  },
];

const Eps: SelectOptions[] = [
  {
    value: "14045",
    label: "Drummond CO",
  },
  {
    value: "1401",
    label: "Drummond LTD",
  },
];

const Arp: SelectOptions[] = [
  {
    value: "14045",
    label: "Drummond CO",
  },
  {
    value: "1401",
    label: "Drummond LTD",
  },
];

const Cesantias: SelectOptions[] = [
  {
    value: "14045",
    label: "Drummond CO",
  },
  {
    value: "1401",
    label: "Drummond LTD",
  },
];

const Socialsecurity = () => {
  const EmployeeContext = useContext(employeeContext);
  const { onBack, updateSocialsecurityForm } = EmployeeContext;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SocialsecurityForm>();

  const handleData = (data: SocialsecurityForm) => {
    updateSocialsecurityForm(data);
  }; 

  return (
    <div className="flex flex-col bg-white shadow px-10 py-5 rounded">
    <span className="text-gray-700 font-semibold font-montserrat text-xl text-center">
      Seguridad social
    </span>
    <div className="h-5"></div>
    <div className="grid grid-cols-1 gap-2">
  
    <InputSelect
        control={control}
        name="Eps"
        label="EPS"
        defaultValue=""
        options={Eps}
        errorMessage={errors.Eps?.message}
      />
          <InputSelect
        control={control}
        name="Afp"
        label="AFP"
        defaultValue=""
        options={Afp}
        errorMessage={errors.Afp?.message}
      />
          <InputSelect
        control={control}
        name="Arp"
        label="ARL"
        defaultValue=""
        options={Arp}
        errorMessage={errors.Arp?.message}
      />
          <InputSelect
        control={control}
        name="Cesantias"
        label="Cesantias"
        defaultValue=""
        options={Cesantias}
        errorMessage={errors.Cesantias?.message}
      />
  




      </div>
    <div className="flex flex-1 flex-row justify-around mt-5 gap-2">
      <ButtonOutline onPress={onBack} text="Atrás" />
      <ButtonPrimary onPress={handleSubmit(handleData)} text="Siguiente" />
    </div>
  </div>
  )
}

export default Socialsecurity
