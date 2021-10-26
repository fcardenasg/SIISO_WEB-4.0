import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import InputDate from "../../../components/input/InputDate";
import { InputText } from "../../../components/input/InputText";
import { QuestionCovidContext } from "../QuestionCovid";


const CloseContact = () => {
  const questionCovidContext = useContext(QuestionCovidContext);
  const { onBack } = questionCovidContext;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col bg-white shadow px-10 py-5 rounded">
    <span className="text-gray-700 font-semibold font-montserrat text-xl text-center">
    Autorización de Ingreso
    </span>
    <div className="h-5"></div>
    <div className="grid grid-cols-1 gap-2">
      <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
        <InputCheckBox
          control={control}
          name="AutorizaIngesoTurno"
          label="Se autoriza el ingreso al turno"
          defaultValue={false}
          sizeCheck={30}
          errorMessage={errors?.AutorizaIngesoTurno?.message}
        />        
      </div>
 
      <div className="border rounded border-red-200 flex flex-col px-4 pt-2">
   
        <InputCheckBox
          control={control}
          name="OrdenAislamiento"
          label="Se ordena iniciar aislamiento y consultar a la EPS"
          defaultValue={false}
          sizeCheck={30}
          errorMessage={errors?.OrdenAislamiento?.message}
        />
      </div>
   
    </div>
    <div className="flex flex-1 flex-row justify-around mt-5 gap-2">
      <ButtonOutline onPress={onBack} text="Atrás" />
      <ButtonPrimary onPress={() => {}} text="Guardar" />
    </div>
  </div>
  )
}

export default CloseContact;
