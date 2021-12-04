import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { InputText } from "../../components/input/InputText";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import InputCheck from "../../components/input/InputCheck";
import InputSelect, { SelectOptions } from "../../components/input/InputSelect";

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { GetAllTipoCatalogo } from "../../api/clients/TypeofcatalogsClient";
import { CatalogClient, SaveCatalog } from "../../api/clients/CatalogClient";
import { MessageSuccess } from "../../components/message/MessageSuccess"

//Cargar combos
const Objects: SelectOptions[] = [
  {
    value: "Catalogo",
    label: "Catalogo",
  },
  {
    value: "Encriptación",
    label: "Encriptación",
  },
  {
    value: "Tipo de Menu",
    label: "Tipo de Menu",
  },
];

export type CatalogForm = {
  IdCatalogo: string;
  Nombre: string;
  Codigo: string;
  IdTipoCatalogo: string;
  IdObjeto: string;
  Estado: boolean;
};

//Validacion de los campos
const schemaValidation: Yup.SchemaOf<CatalogForm> = Yup.object({
  Nombre: Yup.string()
    .required("Este campo es obligatorio")
    .min(0, "Este campo debe tener minimo 3 caracteres"),
  Codigo: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  IdTipoCatalogo: Yup.string()
    .required("Este campo es obligatorio")
    .min(0, "Este campo debe tener minimo 3 caracteres"),
  IdObjeto: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  IdCatalogo: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Estado: Yup.boolean().required(),
});

interface Props {
  CatalogClient: CatalogClient;
}

const EditCatalog: React.FC<Props> = ({ CatalogClient }) => {
  const TipoCatalogoArray: SelectOptions[] = [];
  const [lsTipoCatalogo, setLsTipoCatalogo] = useState(TipoCatalogoArray);

  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CatalogForm>();

  async function GetAll() {
    const lsTipoCatalogoServer = await GetAllTipoCatalogo(0, 0);
    var result = lsTipoCatalogoServer.entities.map((item: any) => ({
      value: item.idTipoCatalogo,
      label: item.nombre
    }));
    setLsTipoCatalogo(result);
  }

  useEffect(() => {
    GetAll();
  }, []);

  const handleClick = async (form: CatalogForm) => {
    console.log(form);
  };

  const history = useHistory();

  //mostrar en pantalla
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="md:w-full xl bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center">
          <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
            Registro de Catálogos
          </span>
        </div>
        {/* Linea roja y texto */}
        <div className="w-full border-b-2 border-red-1 my-4"></div>
        <div className="grid grid-cols-3 gap-4 my-6">
          <InputSelect
            control={control}
            name="IdObjeto"
            label="Objeto"
            defaultValue=""
            options={Objects}
            errorMessage={errors.IdObjeto?.message}
          />
          <InputSelect
            control={control}
            name="IdTipoCatalogo"
            label="Tipo Catálogo"
            defaultValue=""
            options={lsTipoCatalogo}
            errorMessage={errors.IdTipoCatalogo?.message}
          />
          <InputText
            control={control}
            name="Nombre"
            errorMessage={errors?.Nombre?.message}
            label="Nombre"
            defaultValue=""
          />
          <InputText
            control={control}
            name="Codigo"
            errorMessage={errors?.Codigo?.message}
            label="Código"
            defaultValue=""
          />
          <InputCheck
            control={control}
            name="Estado"
            label="Estado"
            defaultValue={false}
            errorMessage={errors.Estado?.message}
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <ButtonOutline
            onPress={() => history.push("/Catalog")}
            text="Cerrar"
          />
          <div className="h-3"></div>
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Guardar" />
        </div>
      </div>
    </div>
  );
};

export default EditCatalog;