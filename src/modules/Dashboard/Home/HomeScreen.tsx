import { AccessTimeFilled, AddBox, Person } from "@mui/icons-material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import React from "react";
import { ButtonLinkDashboard } from "../../../components/buttons/ButtonLinkDashboard";
import { ButtonLinkLogin } from "../../../components/buttons/ButtonLinkLogin";
import colors from "../../../styles/colors";

export const HomeScreen = () => {
  return (
    <div className="flex flex-1 w-full flex-col gap-10">
      
      <div className="w-full flex justify-between">
        <h1 className="text-md text-gray-700 font-montserrat font-semibold">
          Dimensiones
        </h1>
        <button>
          <div className="flex flex-row gap-1 items-center">
            <AddBox sx={{ color: colors.blue }} />
            <span className="font-montserrat text-xs text-gray-700 mr-10">Agregar más opciones</span>
          </div>
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
        <ButtonLinkDashboard
          title="Personal"
          subtitle="Empleados y contratistas"
          icon={<Person sx={{ fontSize: 40 }} />}
        />
        <ButtonLinkDashboard
          title="Atención"
          subtitle="TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos"
          icon={<LocalHospitalIcon sx={{ fontSize: 40 }} />}
        />
        <ButtonLinkDashboard
          title="Programación"
          subtitle="TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos"
          icon={<AccessTimeFilled sx={{ fontSize: 40 }} />}
        />
      </div>
      <span className="text-gray-700 font-montserrat font-semibold text-md">
        ¿Qué deseas hacer?
      </span>
      <div className="grid grid-cols-2 gap-2 pb-3 lg:grid-cols-4">
        <ButtonLinkLogin url="">
          <span>Medicina Laboral</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Historico Medicina Lab.</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Ausentismo Laboral</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Reintegro</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Accidente de Trabajo</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Asesorias Medicas</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Pruebas de AD</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Framingham</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Ordenes</span>
        </ButtonLinkLogin>
        <ButtonLinkLogin url="">
          <span>Derechos de Petición</span>
        </ButtonLinkLogin>
      </div>
    </div>
  );
};
