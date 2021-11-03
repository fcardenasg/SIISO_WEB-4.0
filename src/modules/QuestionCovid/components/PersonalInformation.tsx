import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputDate from "../../../components/input/InputDate";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";
import { InputText } from "../../../components/input/InputText";
import { PersonalInformationForm } from "../../../types/QuestionCovidTypes";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputCheck from "../../../components/input/InputCheck";
import { QuestionCovidContext } from "../QuestionCovid";

const laboratories: SelectOptions[] = [
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

const dosis: SelectOptions[] =[

{
  value: "1",
  label: "Primera",
},

{
  value: "2",
  label: "Segunda",
},

{
  value: "3",
  label: "Unica",
},

];

const schemaValidation: Yup.SchemaOf<PersonalInformationForm> = Yup.object({
  Documento: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
  Nombres: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
  Email: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido")
    .email("El correo electronico no es valido"),
  Celular: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
  Vacunado: Yup.boolean().required(),
  Idlaboratorio: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
  Dosis: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
  Fecha1raDosis: Yup.string().required("Este campo es requerido").nullable(),
  Fecha2daDosis: Yup.string().required("Este campo es requerido").nullable(),
});

const PersonalInformation = () => {
  const questionCovidContext = useContext(QuestionCovidContext);
  const { updatePersonalInformationForm } = questionCovidContext;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PersonalInformationForm>({
    resolver: yupResolver(schemaValidation),
  });

  const handleData = (data: PersonalInformationForm) => {
    console.log(data);
    updatePersonalInformationForm(data);
  };

  return (
    <div className="flex flex-col bg-white shadow px-10 py-5 w-full xl:w-1/2 rounded">
      <span className="text-gray-700 font-semibold font-montserrat text-xl text-center">
        Mis datos personales
      </span>
      <div className="h-5"></div>
      <InputText
        control={control}
        name="Documento"
        label="Documento"
        defaultValue=""
        errorMessage={errors?.Documento?.message}
      />
      <InputText
        control={control}
        name="Nombres"
        label="Nombres"
        defaultValue=""
        errorMessage={errors.Nombres?.message}
      />
      <InputText
        control={control}
        name="Email"
        label="Email"
        defaultValue=""
        errorMessage={errors.Email?.message}
      />
      <InputText
        control={control}
        name="Celular"
        label="Celular"
        defaultValue=""
        errorMessage={errors.Celular?.message}
      />
      <InputCheck
        control={control}
        name="Vacunado"
        label="Vacunado"
        defaultValue={false}
        errorMessage={errors.Vacunado?.message}
      />
      <InputSelect
        control={control}
        name="Idlaboratorio"
        label="Laboratorio"
        defaultValue=""
        options={laboratories}
        errorMessage={errors.Idlaboratorio?.message}
      />
      <InputSelect
        control={control}
        name="Dosis"
        label="Dosis"
        defaultValue=""
        options={dosis}
        errorMessage={errors.Dosis?.message}
      />
      <InputDate
        control={control}
        name="Fecha1raDosis"
        label="Fecha Primera Dosis"
        defaultValue={null}
        errorMessage={errors.Fecha1raDosis?.message}
      />
      <InputDate
        control={control}
        name="Fecha2daDosis"
        label="Fecha Segunda Dosis"
        defaultValue={null}
        errorMessage={errors.Fecha2daDosis?.message}
      />
      <div className="h-5"></div>
      <ButtonPrimary onPress={handleSubmit(handleData)} text="Siguiente" />
    </div>
  );
};

export default PersonalInformation;
