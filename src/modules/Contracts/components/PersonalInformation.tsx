import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import InputDate from "../../../components/input/InputDate";
import InputSelect, {
  SelectOptions,
} from "../../../components/input/InputSelect";
import { InputText } from "../../../components/input/InputText";
import { PersonalInformationForm } from "../../../types/ContractsTypes";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputCheck from "../../../components/input/InputCheck";
import { ContractsContext } from "../Contracts";


const Companies: SelectOptions[] = [
  {
    value: "1",
    label: "Drummond Ltd.",
  },
  {
    value: "2",
    label: "Drummond Energy",
  },
];

const Category: SelectOptions[] =[

{
  value: "1",
  label: "Falta parametro",
},

{
  value: "2",
  label: "Falta parametro1",
},

{
  value: "3",
  label: "Falta parametro2",
},

];

const subcategory: SelectOptions[] = [
  {
    value: "1",
    label: "Falta parametro",
  },
  {
    value: "2",
    label: "Falta parametro1",
  },
  {
    value: "3",
    label: "Falta parametro2",
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
    label: "El Corozo",
  },
  {
    value: "ELDES",
    label: "El descanso",
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


const Statecontract: SelectOptions[] = [
  {
    value: "1",
    label: "En proceso",
  },
  {
    value: "2",
    label: "Activo",
  },
  {
    value: "3",
    label: "Finalizado",
  },
  {
    value: "4",
    label: "Cancelado",
  },
];


const Contractor: SelectOptions[] = [
  {
    value: "1234567",
    label: "Rubikapp",
  },
  {
    value: "9087766555",
    label: "Masa",
  },
  {
    value: "8765443",
    label: "Servividrios",
  },
  {
    value: "8765432",
    label: "HG Ingeniería",
  },
];

const Buyer: SelectOptions[] = [
  {
    value: "1234567",
    label: "Hernan restrepo",
  },
  {
    value: "9087766555",
    label: "Ibbo Mejia",
  },
  {
    value: "8765443",
    label: "Laura Acevedo",
  },
  {
    value: "8765432",
    label: "Jorge Caballero",
  },
];

const Administrator: SelectOptions[] = [
  {
    value: "1234567",
    label: "Jorge Rivera",
  },
  {
    value: "9087766555",
    label: "Amilcar ",
  },
  {
    value: "8765443",
    label: "Leonardo Joya",
  },
  {
    value: "8765432",
    label: "Hernan Restrepo",
  },
];


// const schemaValidation: Yup.SchemaOf<PersonalInformationForm> = Yup.object({
//   Documento: Yup.string()
//     .min(3, "Minimo 3 caracteres")
//     .required("Este campo es requerido"),
//     Nombres: Yup.string()
//     .min(3, "Minimo 3 caracteres")
//     .required("Este campo es requerido"),
//     Email: Yup.string()
//     .min(3, "Minimo 3 caracteres")
//     .required("Este campo es requerido")
//     .email("El correo electronico no es valido"),
//    Celular: Yup.string()
//     .min(3, "Minimo 3 caracteres")
//     .required("Este campo es requerido"),
//     Empresa: Yup.string()
//     .min(3, "Minimo 3 caracteres")
//     .required("Este campo es requerido"),
//     Sede: Yup.string()
//     .min(3, "Minimo 3 caracteres")
//     .required("Este campo es requerido"),
//     FechaNaci: Yup.string().required("Este campo es requerido").nullable(),
//     Genero: Yup.string()
//     .min(3, "Minimo 3 caracteres")
//     .required("Este campo es requerido"),
//     Escolarida: Yup.string()
//     .min(1, "Minimo 1 caracteres")
//     .required("Este campo es requerido"),
//     Contacto: Yup.string()
//     .min(3, "Minimo 3 caracteres")
//     .required("Este campo es requerido"),
//     TelefonoContacto: Yup.string()
//     .min(3, "Minimo 3 caracteres")
//     .required("Este campo es requerido"),
//     EstadoCivil: Yup.string()
//     .min(1, "Minimo 1 caracteres")
//     .required("Este campo es requerido"),
//     PayStatus: Yup.string()
//     .min(1, "Minimo 1 caracteres")
//     .required("Este campo es requerido"),
// });


const PersonalInformation = () => {
  const contractsContext = useContext(ContractsContext);
  const { updatePersonalInformationForm } = contractsContext;

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PersonalInformationForm>();
   

  const handleData = (data: PersonalInformationForm) => {
    console.log(data);
    updatePersonalInformationForm(data);
  };




  
  return (
    <div className="flex flex-col bg-white shadow px-40 py-1 rounded">
     <span className="text-gray-500 font-semibold px-3 py-2 font-montserrat text-xl text-center">
      Contratos
      </span>
      <div className="h-5"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 px 10 py-1 gap-2">
  
      <InputSelect
        control={control}
        name="Idempresa"
        label="Empresa"
        defaultValue=""
        options={Companies}
        errorMessage={errors.Idempresa?.message}
      />

      <InputText
        control={control}
        name="Prefijo"      
        label="Prefijo"
        defaultValue=""
        errorMessage={errors?.Prefijo?.message}
      />
      <InputText
        control={control}
        name="Consecutivo"
        label="Consecutivo"
        defaultValue=""
        errorMessage={errors.Consecutivo?.message}
      />
    
      <InputText
        control={control}
        name="Adiccional" 
        label="Adiccional"
        defaultValue=""
        errorMessage={errors.Adiccional?.message}
      />
      <InputText
        control={control}
        name="Numerocontrato"
        label="# de contrato"
        defaultValue=""
        errorMessage={errors.Numerocontrato?.message}
      />
      

        <InputSelect
        control={control}
        name="idcategoria"
        label="Categorias"
        defaultValue=""
        options={Category}
        errorMessage={errors.idcategoria?.message}
/>

<InputSelect
        control={control}
        name="idsubcategoria"
        label="SubCategoria"
        defaultValue=""
        options={subcategory}
        errorMessage={errors.idsubcategoria?.message}
      />
     <InputText
        control={control}
        name="Servicio"
        label="Servicio"
        defaultValue=""
        errorMessage={errors.Servicio?.message}
      />

<      InputSelect
        control={control}
        name="Idestadocontrato"
        label="Estado"
        defaultValue=""
        options={Statecontract}
        errorMessage={errors.Idestadocontrato?.message}
      /> 

       <InputSelect
        control={control}
        name="Idsede"
        label="Sedes"
        defaultValue=""
        options={Headquarters}
        errorMessage={errors.Idsede?.message}
      />

<InputText
        control={control}
        name="Numeroorden"
        label="# De Orden"
        defaultValue=""
        errorMessage={errors.Numeroorden?.message}
      />

<InputSelect
        control={control}
        name="Idcontratista"
        label="Contratista"
        defaultValue=""
        options={Contractor}
        errorMessage={errors.Idcontratista?.message}
      />

           <InputDate
        control={control}
        name="Fechainiciocontrato"
        label="Fecha de inicio"
        defaultValue={null}
        errorMessage={errors.Fechainiciocontrato?.message}
      />

       <InputDate
        control={control}
        name="Fechafincontrato"
        label="Fecha Fin"
        defaultValue={null}
        errorMessage={errors.Fechafincontrato?.message}
      />
    
        <InputSelect
        control={control}
        name="Idcomprador"
        label="Comprador"
        defaultValue=""
        options={Buyer}
        errorMessage={errors.Idcomprador?.message}
      />
    
    <InputSelect
        control={control}
        name="Idadministrador"
        label="Administrador"
        defaultValue=""
        options={Administrator}
        errorMessage={errors.Idadministrador?.message}
      />
      

       </div>
      <div className="h-5"></div>
      <ButtonPrimary onPress={handleSubmit(handleData)} text="Siguiente" />
    </div>
   
  );
};

export default PersonalInformation;





