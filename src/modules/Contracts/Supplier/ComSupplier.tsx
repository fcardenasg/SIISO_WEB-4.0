import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router"
import { InputText } from "../../../components/input/InputText";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../../components/buttons/ButtonOutline";
import InputCheck from "../../../components/input/InputCheck";
import InputSelect, { SelectOptions } from "../../../components/input/InputSelect";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import InputDate from "../../../components/input/InputDate";
import { GetAllComCatalog } from "../../../api/clients/ComCatalogClient";

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MessageSuccess } from "../../../components/message/MessageSuccess"
import { ComSupplierClient, SaveComSupplier } from "../../../api/clients/ComSupplierClient";

//Cargar combos
const Class: SelectOptions[] = [
  {
    value: "C",
    label: "C",
  },
  {
    value: "D",
    label: "D",
  },

];
const contry: SelectOptions[] = [
  {
    value: "Colombia",
    label: "Colombia",
  },
  {
    value: "USA",
    label: "USA",
  },

];
const city: SelectOptions[] = [
  {
    value: "Valledupar",
    label: "Valledupar",
  },
  {
    value: "Barranquilla",
    label: "Barranquilla",
  },
  {
    value: "Santa Marta",
    label: "Santa Marta",
  },
];
const department: SelectOptions[] = [
  {
    value: "Cesar",
    label: "Cesar",
  },
  {
    value: "Atlantico",
    label: "Atlantico",
  },
  {
    value: "Magdalena",
    label: "Magdalena",
  },
];
const Estatus: SelectOptions[] = [
  {
    value: "Cleared",
    label: "Cleared",
  },
  {
    value: "Review",
    label: "Review",
  },
  {
    value: "Valid",
    label: "Valid",
  },
];
const oldseller: SelectOptions[] = [
  {
    value: "9898998",
    label: "Francisco cardenas",
  },
  {
    value: "44444444",
    label: "Angelica angarita",
  },
  {
    value: "77777777",
    label: "Juan pablo cardenas",
  },
];

export type ComSupplierForm = {
  CodiProv: string;
  NombProv: string;
  TeleProv: string;
  EmaiProv: string;
  ContaProv: string;
  DireProv: string;
  OldvProv: string;
  DepaProv: number;
  CiudProv: number;
  PaisProv: number;
  PostProv: string;
};

interface Props {
  ComSupplierClient: ComSupplierClient;
}

const ComSupplier: React.FC<Props> = ({ ComSupplierClient }) => {
  const CatalogoArray: SelectOptions[] = [];
  const [lsCatalogo, setLsCatalogo] = useState(CatalogoArray);

  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ComSupplierForm>();

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //Cargar combo-box
  useEffect(() => {
    async function GetAll() {
      const lsCatalogoServer = await GetAllComCatalog(0, 0);
      var result = lsCatalogoServer.entities.map((item: any) => ({
        value: item.idCatalogo,
        label: item.nombre
      }));
      setLsCatalogo(result);
    }
    GetAll();
  }, []);

  const handleClick = async (form: ComSupplierForm) => {
    console.log(form);
    const ResponseSupplier = await SaveComSupplier(form);
    MessageSuccess();
  };

  const history = useHistory();

  //mostrar en pantalla
  return (
    <div className="p-1 flex justify-center items-center">
      <div className="md:w-full xl bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center mb-5">
          <span className="text-gray-600 font-montserrat font-semibold text-lg text-center">
            Registro de Proveedores
          </span>
        </div>
        {/* Linea roja y texto */}
        <div className="grid grid-cols-3 gap-2">
          <InputText
            control={control}
            name="CodiProv"
            errorMessage={errors?.CodiProv?.message}
            label="Código"
            defaultValue=""
          />
          <InputText
            control={control}
            name="NombProv"
            errorMessage={errors?.NombProv?.message}
            label="Nombre"
            defaultValue=""
          />
          <InputText
            control={control}
            name="TeleProv"
            errorMessage={errors?.TeleProv?.message}
            label="Celular"
            defaultValue=""
          />
          <InputText
            control={control}
            name="EmaiProv"
            errorMessage={errors?.EmaiProv?.message}
            label="Correo electrónico"
            defaultValue=""
          />
          <InputText
            control={control}
            name="ContaProv"
            errorMessage={errors?.ContaProv?.message}
            label="Contacto"
            defaultValue=""
          />
          <InputText
            control={control}
            name="DireProv"
            errorMessage={errors?.DireProv?.message}
            label="Dirección"
            defaultValue=""
          />
          <InputText
            control={control}
            name="OldvProv"
            errorMessage={errors?.OldvProv?.message}
            label="Antiguo vendedor #"
            defaultValue=""
          />
          <InputSelect
            control={control}
            name="PaisProv"
            label="País"
            defaultValue=""
            options={lsCatalogo}
            errorMessage={errors.PaisProv?.message}
          />
          <InputSelect
            control={control}
            name="DepaProv"
            label="Departamento"
            defaultValue=""
            options={lsCatalogo}
            errorMessage={errors.DepaProv?.message}
          />
          <InputSelect
            control={control}
            name="CiudProv"
            label="Ciudad"
            defaultValue=""
            options={lsCatalogo}
            errorMessage={errors.CiudProv?.message}
          />
          <InputText
            control={control}
            name="PostProv"
            errorMessage={errors?.PostProv?.message}
            label="Servicios"
            defaultValue=""
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <ButtonOutline onPress={() => history.push('/ComCatalog')} text="Cerrar" />
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div>
      </div>
    </div>
  );
};

export default ComSupplier;