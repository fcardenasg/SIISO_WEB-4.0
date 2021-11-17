import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import InputDate from "../../../components/input/InputDate";
import { InputText } from "../../../components/input/InputText";
import { CostsForm } from "../../../types/ContractsTypes";
import { ContractsContext } from "../Contracts";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";


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



const Costs = () => {
  const contractsContext = useContext(ContractsContext);
  const { onBack, updateCostsForm } = contractsContext;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CostsForm>();

  const handleData = (data: CostsForm) => {
    console.log(data);
    updateCostsForm(data);
  };

  return (
    <div className="flex flex-col bg-white shadow px-40 py-1 rounded">
    <span className="text-gray-500 font-semibold px-3 py-2 font-montserrat text-xl text-center">
        Costos
      </span>
      <div className="h-5"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 px 10 py-1 gap-2">
        
          <InputSelect
            control={control}
            name="Idmoneda"
            label="Moneda"
            defaultValue=""
            options={currency}
            errorMessage={errors?.Idmoneda?.message}
          />
       
          <InputText
            control={control}
            name="Costopresupuesto"
            label="Costo presupuestado"
            defaultValue=""
            errorMessage={errors?.Costopresupuesto?.message}
          />
    
      <InputText
            control={control}
            name="Costocontrato"
            label="Costo total"
            defaultValue=""
            errorMessage={errors?.Costocontrato?.message}
          />


      </div>
      <div className="h-5"></div>
      <div className="grid grid-cols-2">
        <ButtonOutline onPress={onBack} text="Atrás" />
        <ButtonPrimary onPress={() => {}} text="Guardar" />
      </div>
    </div>
  );
};

export default Costs;
