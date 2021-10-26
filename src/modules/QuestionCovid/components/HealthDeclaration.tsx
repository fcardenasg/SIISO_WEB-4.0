import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputCheckBox from "../../../components/input/InputCheckBox";
import InputDate from "../../../components/input/InputDate";
import { InputText } from "../../../components/input/InputText";
import { HealthDeclarationForm } from "../../../types/QuestionCovidTypes";
import { QuestionCovidContext } from "../QuestionCovid";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";

const Profesion: SelectOptions[] = [
  {
    value: "Administrativos",
    label: "Administrativos",
  },
  {
    value: "Aseo y servicios básicos",
    label: "Aseo y servicios básicos",
  },
  {
    value: "Bacteriología",
    label: "Bacteriología",
  },
  {
    value: "Camilleros",
    label: "Camilleros",
  },
];

const Contactocon: SelectOptions[] = [
  {
    value: "Ninguno",
    label: "Ninguno",
  },
  {
    value: "Contacto con positivo",
    label: "Contacto con positivos",
  },
  {
    value: "Sospechoso con positivo",
    label: "Sospechoso con positivo",
  },
];

const HealthDeclaration = () => {
  const questionCovidContext = useContext(QuestionCovidContext);
  const { onBack, updateHealthDeclarationForm } = questionCovidContext;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<HealthDeclarationForm>();

  const handleData = (data: HealthDeclarationForm) => {
    console.log(data);
    updateHealthDeclarationForm(data);
  };

  return (
    <div className="flex flex-col bg-white shadow px-10 py-5 rounded">
      <span className="text-gray-700 font-semibold font-montserrat text-xl text-center">
        Declaración de salud
      </span>
      <div className="h-5"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputCheckBox
            control={control}
            name="PersonalMedico"
            label="¿Vive con personas que presten servicios de salud?"
            defaultValue={false}
            sizeCheck={30}
            errorMessage={errors?.PersonalMedico?.message}
          />
          <InputText
            control={control}
            name="ObsPersonalMedico"
            label="Observaciones"
            defaultValue=""
            errorMessage={errors?.ObsPersonalMedico?.message}
          />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputSelect
            control={control}
            name="ServicioSaludId"
            label="Profesión"
            defaultValue=""
            options={Profesion}
            errorMessage={errors?.ServicioSaludId?.message}
          />
          <InputSelect
            control={control}
            name="ContactoPersonaId"
            label="Contacto Con"
            defaultValue=""
            options={Contactocon}
            errorMessage={errors?.ContactoPersonaId?.message}
          />
        </div>

        <div className="border rounded border-red-200 flex flex-col px-4 pt-2">
          <InputCheckBox
            control={control}
            name="AdultosMayores"
            label="¿Vive con adultos mayores de 65 años, o personas con enfermedades preexistentes?"
            defaultValue={false}
            sizeCheck={30}
            errorMessage={errors?.AdultosMayores?.message}
          />
          <InputText
            control={control}
            name="ObsAdultosMayores"
            label="Observaciones"
            defaultValue=""
            errorMessage={errors?.ObsAdultosMayores?.message}
          />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputCheckBox
            control={control}
            name="Fiebre"
            label="Fiebre"
            defaultValue={false}
            sizeCheck={30}
            errorMessage={errors?.PersonalMedico?.message}
          />
          <InputText
            control={control}
            name="ObsFiebre"
            label="Observaciones"
            defaultValue=""
            errorMessage={errors?.PersonalMedico?.message}
          />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputCheckBox
            control={control}
            name="Tos"
            label="Tos"
            defaultValue={false}
            sizeCheck={30}
            errorMessage={errors?.PersonalMedico?.message}
          />
          <InputText
            control={control}
            name="ObsTos"
            label="Observaciones"
            defaultValue=""
            errorMessage={errors?.PersonalMedico?.message}
          />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputCheckBox
            control={control}
            name="DificultadRespiratoria"
            label="Dificultad Respiratoria"
            defaultValue={false}
            sizeCheck={30}
            errorMessage={errors?.PersonalMedico?.message}
          />
          <InputText
            control={control}
            name="ObsDificultadRespiratoria"
            label="Observaciones"
            defaultValue=""
            errorMessage={errors?.PersonalMedico?.message}
          />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputCheckBox
            control={control}
            name="DolorGarganta"
            label="Dolor Garganta"
            defaultValue={false}
            sizeCheck={30}
            errorMessage={errors?.PersonalMedico?.message}
          />
          <InputText
            control={control}
            name="ObsDolorGarganta"
            label="Observaciones"
            defaultValue=""
            errorMessage={errors?.ObsAdultosMayores?.message}
          />
        </div>

        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputCheckBox
            control={control}
            name="Vomito"
            label="Vomito"
            defaultValue={false}
            sizeCheck={30}
            errorMessage={errors?.PersonalMedico?.message}
          />
          <InputText
            control={control}
            name="ObsVomito"
            label="Observaciones"
            defaultValue=""
            errorMessage={errors?.PersonalMedico?.message}
          />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputCheckBox
            control={control}
            name="CongestionNasal"
            label="Congestion Nasal"
            defaultValue={false}
            sizeCheck={30}
            errorMessage={errors?.PersonalMedico?.message}
          />
          <InputText
            control={control}
            name="ObsCongestionNasal"
            label="Observaciones"
            defaultValue=""
            errorMessage={errors?.PersonalMedico?.message}
          />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputCheckBox
            control={control}
            name="Escalofrio"
            label="Escalofrio"
            defaultValue={false}
            sizeCheck={30}
            errorMessage={errors?.PersonalMedico?.message}
          />
          <InputText
            control={control}
            name="ObsEscalofrio"
            label="Observaciones"
            defaultValue=""
            errorMessage={errors?.PersonalMedico?.message}
          />
        </div>
        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputCheckBox
            control={control}
            name="MalestarGeneral"
            label="Malestar General"
            defaultValue={false}
            sizeCheck={30}
            errorMessage={errors?.PersonalMedico?.message}
          />
          <InputText
            control={control}
            name="ObsMalestarGeneral"
            label="Observaciones"
            defaultValue=""
            errorMessage={errors?.ObsAdultosMayores?.message}
          />
        </div>

        <div className="border rounded border-red-200 flex flex-col flex-1 px-4 pt-2">
          <InputText
            control={control}
            name="OtrosSintomas"
            label="Otros Sintomas"
            defaultValue=""
            errorMessage={errors?.ObsAdultosMayores?.message}
          />
          <InputDate
            control={control}
            name="FechaInicioSintomas"
            label="Fecha Inicio Sintomas"
            defaultValue={null}
            errorMessage={errors?.ObsAdultosMayores?.message}
          />
        </div>
      </div>
      <div className="h-5"></div>
      <div className="grid grid-cols-2">
        <ButtonOutline onPress={onBack} text="Atrás" />
        <ButtonPrimary onPress={handleSubmit(handleData)} text="Siguiente" />
      </div>
    </div>
  );
};

export default HealthDeclaration;
