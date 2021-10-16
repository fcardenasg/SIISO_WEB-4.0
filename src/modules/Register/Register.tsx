import React from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../../components/input/InputText";
import logo from "../../assets/img/icono.png";
import { ButtonPrimary } from "../../components/buttons/ButtonPrimary";

// Validacion
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { ButtonOutline } from "../../components/buttons/ButtonOutline";
import InputCheck from "../../components/input/InputCheck";

type RegisterForm = {
  Documento: string;
  Nombres: string;
  Celular: string;
  Email: string;
  Empresa: string;
  Vacunado: boolean;
  Arp: string;
  Eps: string;
};

const schemaValidation: Yup.SchemaOf<RegisterForm> = Yup.object({
  Documento: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Nombres: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Celular: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Email: Yup.string()
    .required("Este campo es obligatorio")
    .email("El correo es invalido"),
  Empresa: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Arp: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Eps: Yup.string()
    .required("Este campo es obligatorio")
    .min(3, "Este campo debe tener minimo 3 caracteres"),
  Vacunado: Yup.boolean().required("Este campo es requerido"),
});

export const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(schemaValidation),
  });

  const router = useHistory();
  router.push('aaa');

  const handleClick = (data: RegisterForm) => {
    console.log(data);
  };

  return (
    <div className="p-10 flex justify-center items-center">
      <div className="md:w-1/2 bg-white rounded shadow py-5 px-10">
        <div className="w-full flex justify-center">
          <img src={logo} alt="" className="h-10 w-12 my-2 object-center" />
        </div>
        <div className="w-full flex justify-center">
          <span className="text-gray-700 font-montserrat font-semibold text-lg text-center">
            Registro de Visitante
          </span>
        </div>

        <div className="w-full border-b-2 border-red-1 my-4"></div>
        <InputText
          control={control}
          name="Documento"
          errorMessage={errors?.Documento?.message}
          label="Documento"
          defaultValue=""
        />
        <InputText
          control={control}
          name="Nombres"
          errorMessage={errors?.Nombres?.message}
          label="Nombres"
          defaultValue=""
        />
        <InputText
          control={control}
          name="Celular"
          errorMessage={errors?.Celular?.message}
          label="Celular"
          defaultValue=""
        />
        <InputText
          control={control}
          name="Email"
          errorMessage={errors?.Email?.message}
          label="Correo Electronico"
          defaultValue=""
        />
        <InputText
          control={control}
          name="Empresa"
          errorMessage={errors?.Empresa?.message}
          label="Empresa"
          defaultValue=""
        />
        <InputText
          control={control}
          name="Eps"
          errorMessage={errors?.Eps?.message}
          label="Eps"
          defaultValue=""
        />
        <InputText
          control={control}
          name="Arp"
          errorMessage={errors?.Arp?.message}
          label="Arp"
          defaultValue=""
        />
        <InputCheck
          control={control}
          name="Vacunado"
          label="Vacunado"
          defaultValue={false}
          errorMessage={errors.Vacunado?.message}
        />
        <ButtonPrimary onPress={handleSubmit(handleClick)} text="Registrarme" />
        <div className="h-3"></div>
        <Link to="/login">
          <ButtonOutline onPress={() => {}} text="Cancelar" />
        </Link>
      </div>
    </div>
  );
};
