import React from "react";
import { useForm } from "react-hook-form";
import { InputText } from "../../../components/input/InputText";
import { patientsMock } from "./dataMockProgramming";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Programming = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  const [patients, setPatients] = React.useState(patientsMock);

  return (
    <div className="p-1">
      <div className="w-full bg-blue-500 shadow rounded p-5 text-sm text-white font-montserrat font-semibold">
        Programación
      </div>
      <div className="h-5"></div>
      <div className="grid grid-cols-2">
        <span className="text-xl font-semibold font-montserrat text-gray-700">
          Listado de Pacientes
        </span>
        <InputText
          control={control}
          name="busqueda"
          errorMessage={errors?.busqueda?.message}
          label="Búsqueda"
          defaultValue=""
        />
      </div>
      {patients.map((patient) => (
        <div className="flex flex-row bg-white rounded shadow-md my-3">
          <div
            className={`w-3 rounded-l ${
              patient.EstadoCaso === "Nuevo" ? "bg-yellow-500" : "bg-green-400"
            }`}
          />
          <div className="flex flex-1 flex-row w-full justify-between items-center p-4 gap-7">
            <div>
              <img
                src={patient.ImagenUrl}
                className="w-24 h-24 rounded-full mx-auto"
                alt=""
              />
            </div>
            <div className="flex-1 grid grid-cols-3 gap-x-6 gap-y-3 text-gray-700 text-sm font-montserrat">
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Fecha: </span>
                <strong>{patient.Fecha}</strong>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Paciente:</span>
                <strong>{patient.Nombres}</strong>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Documento: </span>
                <strong>{patient.Documento}</strong>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Sede: </span>
                <strong>{patient.Sede}</strong>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-400">Usuario :</span>
                <strong>{patient.usuario}</strong>
              </div>
            </div>
            <div className=" flex flex-1 flex-col gap-3">
              <div className="flex flex-col font-montserrat">
                <span className="text-xs text-gray-400">Contingencia: </span>
                <strong>{patient.Contingencia}</strong>
              </div>
              <div className="flex flex-col font-montserrat">
                <span className="text-xs text-gray-400">Estado Paciente: </span>
                <strong>{patient.EstadoPac}</strong>
              </div>
            </div>
            <div className="flex flex-col">
              {patient.Atencion.map((atention) => (
                <div
                  className={`
                    p-1
                    text-white
                    font-montserrat
                    text-xs
                    my-1
                    rounded-lg 
                    text-center w-40
                    ${atention === "Triage I" ? "bg-yellow-500" : ""}
                    ${atention === "Psicología" ? "bg-red-400" : ""}
                    ${atention === "Ergonomia" ? "bg-blue-400" : ""}
                  `}
                >
                  {atention}
                </div>
              ))}
            </div>
            <div className="flex">
              <MoreVertIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programming;
