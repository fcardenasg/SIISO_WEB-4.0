import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import { CloseContactForm } from "../../../types/QuestionCovidTypes";
import { QuestionCovidContext } from "../QuestionCovid";

const CloseContact = () => {
  const questionCovidContext = useContext(QuestionCovidContext);
  const { onBack, updateCloseContactForm } = questionCovidContext;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CloseContactForm>();

  const handleData = (data: CloseContactForm) => {
    updateCloseContactForm(data);
  }; 

  return (
    <div className="flex flex-col bg-white shadow px-10 py-5 rounded">
    <span className="text-gray-700 font-semibold font-montserrat text-xl text-center">
      Contacto Estrecho
    </span>
    <div className="h-5"></div>
    <div className="grid grid-cols-1 gap-2">
      <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
        <InputCheckBox
          control={control}
          name="ContactoConE"
          label="¿En los últimos 14 días ha tenido contacto con alguna persona con síntomas o que haya sido declarada enferma o sospechosa para COVID-19, en las siguientes condiciones:?"
          defaultValue={false}
          sizeCheck={30}
          errorMessage={errors?.ContactoConE?.message}
        />        
      </div>
      <span className="text-gray-700 font-semibold font-montserrat text-xs text-center">
          Si la respuesta es sí, responda las siguientes.
        </span>
      <div className="border rounded border-red-200 flex flex-col px-4 pt-2">
   
        <InputCheckBox
          control={control}
          name="ContactoSinTapabocas"
          label="¿Alguno de los dos estaba sin protección respiratoria (tapabocas)?"
          defaultValue={false}
          sizeCheck={30}
          errorMessage={errors?.ContactoSinTapabocas?.message}
        />
      </div>
      <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
        <InputCheckBox
          control={control}
          name="Distancia2Metros"
          label="¿Estaban a una distancia menor de 2 metros?"
          defaultValue={false}
          sizeCheck={30}
          errorMessage={errors?.Distancia2Metros?.message}
        />
    
      </div>
      <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
        <InputCheckBox
          control={control}
          name="MasDe15Min"
          label="¿Por más de 15 minutos?"
          defaultValue={false}
          sizeCheck={30}
          errorMessage={errors?.MasDe15Min?.message}
        />
      </div>
      <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
        <InputCheckBox
          control={control}
          name="SinLavadodeManos"
          label="¿Sin haberse lavado las manos minuciosamente después?"
          defaultValue={false}
          sizeCheck={30}
          errorMessage={errors?.SinLavadodeManos?.message}
        />
      </div>
      <span className="text-gray-700 font-semibold font-montserrat text-xs text-center">
           Preguntas Solo Para Casos Con Respuestas Positivas
        </span>
      </div>
      <div className="h-5"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
        <InputCheckBox
          control={control}
          name="CosultadoEps"
          label="¿Ha consultado a su EPS por los síntomas o por los contactos positivos?"
          defaultValue={false}
          sizeCheck={30}
          errorMessage={errors?.CosultadoEps?.message}
        />
      </div>
      <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputCheckBox
          control={control}
          name="CumplioTiempoAislamiento"
          label="¿Ha cumplido el tiempo de aislamiento requerido para contactos o síntomas?"
          defaultValue={false}
          sizeCheck={30}
          errorMessage={errors?.CumplioTiempoAislamiento?.message}
        />
      </div>
    </div>
    <div className="flex flex-1 flex-row justify-around mt-5 gap-2">
      <ButtonOutline onPress={onBack} text="Atrás" />
      <ButtonPrimary onPress={handleSubmit(handleData)} text="Siguiente" />
    </div>
  </div>
  )
}

export default CloseContact
