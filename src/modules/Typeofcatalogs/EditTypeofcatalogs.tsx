import React, {useEffect} from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import { InputText } from "../../components/input/InputText";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import InputCheck from "../../components/input/InputCheck";
import InputSelect, {
  SelectOptions,
} from "../../components/input/InputSelect";

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TypeofcatalogClient, UpdateTypeCatalog } from "../../api/clients/TypeofcatalogsClient";
import { MessageSuccess } from "../../components/message/MessageSuccess"
import buildTypeofcatalogsClient from "../../api/clients/TypeofcatalogsClient";

const clientHttp = buildTypeofcatalogsClient();


export type TypeofcatalogsForm = {
  Nombre: string;
};


interface Props {
  TypeofcatalogsClient: TypeofcatalogClient;
}

const EditTypeofcatalogs: React.FC<Props> = ({ TypeofcatalogsClient }) => {
  //Crear formulario para validar
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<TypeofcatalogsForm>();

  const handleClick = async (form: TypeofcatalogsForm) => {
    console.log(form);
    const ResponsePolicy = await UpdateTypeCatalog(form);
    MessageSuccess();
  };

  const history = useHistory();

  //mostrar en pantalla
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="md:w-1/2 bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center">
          <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
            Editar Tipo de Cátalogo
          </span>
        </div>
        { /* Linea roja y texto */}
        <div className="w-full border-b-2 border-red-1 my-4"></div>
        <InputText
          control={control}
          name="Nombre"
          errorMessage={errors?.Nombre?.message}
          label="Nombre"
          defaultValue=""
        />
          <ButtonPrimary onPress={handleSubmit(handleClick)} text="Editar" />
        <div className="h-3"></div>
        <ButtonOutline
          onPress={() => history.push("/TypeCatalog")}
          text="Cerrar"
        />
      </div>
    </div>
  );
}

/* onClick={() => handleDelete(tcatalog.idTipoCatalogo)} */

export default EditTypeofcatalogs;