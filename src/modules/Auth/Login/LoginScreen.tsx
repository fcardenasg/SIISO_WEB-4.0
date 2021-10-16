import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import { InputText } from "../../../components/input/InputText";
import authContext from "../../../providers/authContext";
import { LoginForm } from "../../../types/LoginForm";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaValidationLogin from "./schemaValidation";
import { useHistory } from "react-router";
import logo from "../../../assets/img/logo.png";
import { LocalHospital, PersonAdd } from "@mui/icons-material";
import { ButtonLinkLogin } from "../../../components/buttons/ButtonLinkLogin";
import { InputPassword } from "../../../components/input/InputPassword";

interface LoginProps {}

export const LoginScreen: React.FC<LoginProps> = () => {
  const { signin } = useContext(authContext);
  const history = useHistory();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schemaValidationLogin),
  });

  const onSubmit = (data: LoginForm) => {
    signin({
      uuid: "111",
      user: data.user,
      name: data.user,
      lastname: data.user,
    });
    history.push("/home");
  };

  return (
    <div className="p-5 flex justify-center items-center flex-col">
      <div className="w-full flex justify-center">
        <img src={logo} alt="" className="h-20 w-20 my-6 object-center" />
      </div>
      <div className="h-6"></div>
      <div
        className="
        w-full
        md:w-1/3
        xl:w-1/3
      "
      >
        <div className="gap-2 grid lg:grid-cols-2">
          <ButtonLinkLogin url="/register">
            <div className="flex flex-row items-center gap-2">
              <PersonAdd />
              <span>Registro de visitantes</span>
            </div>
          </ButtonLinkLogin>
          <ButtonLinkLogin url="/question-covid">
            <div className="flex flex-row items-center gap-2">
              <LocalHospital />
              <span>Cuestionario de Salud</span>
            </div>
          </ButtonLinkLogin>
        </div>
        <div className="h-6"></div>
        <h1 className="text-xl font-montserrat font-semibold text-gray-700 text-center">
          ¡Te damos la bienvenida a SIISO!
        </h1>
        <div className="h-6"></div>

        <div className="border-b border-red-1 w-full flex justify-center pb-3">
          <span className="text-gray-700 text-md font-semibold font-montserrat w-full text-center">
            Ingresa con tu usuario
          </span>
        </div>
        <div className="h-6"></div>
        <form>
          <InputText
            label="Usuario"
            control={control}
            name="user"
            defaultValue=""
            errorMessage={errors.user?.message}
          />
          <div className="h-5"></div>
          <InputPassword
            label="Contraseña"
            control={control}
            name="password"
            defaultValue=""
            errorMessage={errors.password?.message}
          />
          <div className="h-5"></div>
          <ButtonPrimary text="INGRESAR" onPress={handleSubmit(onSubmit)} />
        </form>
      </div>
      <div className="h-10"></div>
      <span className="md:absolute md:bottom-2 font-montserrat text-xs text-center text-blue-2">
        ©️ Copyright 2021 Drummond Ltd. Colombia - V 4.0 ©️ 2021
      </span>
    </div>
  );
};
