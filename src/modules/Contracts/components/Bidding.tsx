import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import InputDate from "../../../components/input/InputDate";
import { InputText } from "../../../components/input/InputText";
import { BiddingForm } from "../../../types/ContractsTypes";
import { ContractsContext } from "../Contracts";

import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";


const StateRequest: SelectOptions[] = [
  {
    value: "1",
    label: "Preparación Alcance",
  },
  {
    value: "2",
    label: "Aprobación Alcance",
  },
  {
    value: "3",
    label: "Aprobación de Polizas",
  },
  {
    value: "4",
    label: "Visita a Oferentes",
  },
  {
    value: "5",
    label: "Invitación a Licitar",
  },
];


const Bidding = () => {
  const contractsContext = useContext(ContractsContext);
  const { onBack, updateBiddingForm } = contractsContext;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BiddingForm>();

  const handleData = (data: BiddingForm) => {
    updateBiddingForm(data);
  };

  return (
    <div className="flex flex-col bg-white shadow px-5 py-1 rounded">

      <span className="text-gray-500 font-semibold px-40 py-2 font-montserrat text-xl text-center">
        Licitación
      </span>
      <div className="h-5"></div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">

        <InputSelect
          control={control}
          name="Idestadolicitacion"
          label="Estado"
          defaultValue=""
          options={StateRequest}
          errorMessage={errors.Idestadolicitacion?.message}
        />
        <InputDate
          control={control}
          name="Fechainiciolicitacion"
          label="Fecha inicio proceso"
          defaultValue={null}
          errorMessage={errors.Fechainiciolicitacion?.message}
        />

        <InputDate
          control={control}
          name="Fechafinlicitacion"
          label="Fecha fin proceso"
          defaultValue={null}
          errorMessage={errors.Fechafinlicitacion?.message}
        />

      </div>

      <div className="h-5"></div>
      <div className="grid grid-cols-2">
        <ButtonOutline onPress={onBack} text="Atrás" />
        <ButtonPrimary onPress={handleSubmit(handleData)} text="Siguiente" />
      </div>
    </div>
  )
}

export default Bidding
