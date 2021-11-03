import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputDate from "../../../components/input/InputDate";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";
import { InputText } from "../../../components/input/InputText";
import { PersonalInformationForm } from "../../../types/employeeTypes";
import { employeeForm } from "../../../types/employeeTypes";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputCheck from "../../../components/input/InputCheck";
import { employeeContext } from "../employee";

const Gender: SelectOptions[] = [
  {
    value: "Femenino",
    label: "Femenino",
  },
  {
    value: "Masculino",
    label: "Masculino",
  },
];

const Schoolchild: SelectOptions[] =[


{
  value: "01",
  label: "Bachiller",
},

{
  value: "02",
  label: "Técnico",
},

{
  value: "03",
  label: "Tecnólogo",
},

{
  value: "04",
  label: "Universitario",
},
{
  value: "05",
  label: "Especialización",
},
{
  value: "06",
  label: "Maestría",
},
{
  value: "07",
  label: "Otros",
},

];

const CivilStatus: SelectOptions[] = [
  {
    value: "01",
    label: "Soltero(a)",
  },
  {
    value: "02",
    label: "Casado(a)",
  },
  {
    value: "03",
    label: "Unión libre",
  },
  {
    value: "04",
    label: "Divorciado(a)",
  },
  {
    value: "05",
    label: "Viudo(a)",
  },
];

const Company: SelectOptions[] = [
  {
    value: "14045",
    label: "Drummond CO",
  },
  {
    value: "1401",
    label: "Drummond LTD",
  },
];
const Headquarters: SelectOptions[] = [
  {
    value: "BOGOT",
    label: "Bogotá",
  },
  {
    value: "CARTA",
    label: "Cartagena",
  },
  {
    value: "ELCOR",
    label: "El Descanso",
  },
  {
    value: "ELDES",
    label: "Masculino",
  },
  {
    value: "HSA",
    label: "Hidrocarburos satélite",
  },
  {
    value: "PORT",
    label: "Puerto",
  },
  {
    value: "PRIBB",
    label: "Pribbenow",
  },
  {
    value: "VALLE",
    label: "Valledupar",
  },
];

const PayStatus: SelectOptions[] = [
  {
    value: "A",
    label: "Activo",
  },
  {
    value: "T",
    label: "Terminado",
  },
  {
    value: "D",
    label: "Fallecido",
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
    Empresa: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    Sede: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    FechaNaci: Yup.string().required("Este campo es requerido").nullable(),
    FileType: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    ID: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    Genero: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    Escolarida: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    Contacto: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    TelefonoContacto: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    EstadoCivil: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    PayStatus: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    ImagenUr: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    UsuarioCreacion: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    FechaCreacion: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    UsuarioModifica: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    FechaModificacion: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),
    Bandera: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Este campo es requerido"),

});

const PersonalInformation = () => {
  const EmployeeContext = useContext(employeeContext);
  const { updatePersonalInformationForm } = EmployeeContext;

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
           <InputDate
        control={control}
        name="FechaNaci"
        label="Fecha de nacimiento"
        defaultValue={null}
        errorMessage={errors.FechaNaci?.message}
      />

      <InputSelect
        control={control}
        name="Genero"
        label="Genero"
        defaultValue=""
        options={Gender}
        errorMessage={errors.Genero?.message}
      />
      <InputSelect
        control={control}
        name="Escolarida"
        label="Escolaridad"
        defaultValue=""
        options={Schoolchild}
        errorMessage={errors.Escolarida?.message}
      />  
  <InputSelect
        control={control}
        name="EstadoCivil"
        label="Estado civil"
        defaultValue=""
        options={CivilStatus}
        errorMessage={errors.EstadoCivil?.message}
      />
        <InputSelect
        control={control}
        name="Empresa"
        label="Empresa"
        defaultValue=""
        options={Company}
        errorMessage={errors.Empresa?.message}
      />
        <InputSelect
        control={control}
        name="Sede"
        label="Sede"
        defaultValue=""
        options={Headquarters}
        errorMessage={errors.Sede?.message}
      />
        <InputSelect
        control={control}
        name="PayStatus"
        label="Estado"
        defaultValue=""
        options={PayStatus}
        errorMessage={errors.PayStatus?.message}
      />
       <InputText
        control={control}
        name="Contacto"
        label="Contacto"
        defaultValue=""
        errorMessage={errors.Contacto?.message}
      />
        <InputText
        control={control}
        name="TelefonoContacto"
        label="TelefonoContacto"
        defaultValue=""
        errorMessage={errors.TelefonoContacto?.message}
      />
      <div className="h-5"></div>
      <ButtonPrimary onPress={handleSubmit(handleData)} text="Siguiente" />
    </div>
  );
};

export default PersonalInformation;





