import React from "react";
import {
  AccessTimeFilled,
  Person,
  LocalHospital,
} from "@mui/icons-material";

export type MenuItem = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  selected: boolean;
};

const fontSize = 40;

export const itemsMenu: MenuItem[] = [
  {
    title: "Personal",
    subtitle: "Empleados y contratistas",
    icon: <Person sx={{ fontSize }} />,
    selected: false,
  },
  {
    title: "Atención",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <LocalHospital sx={{ fontSize }} />,
    selected: true,
  },
  {
    title: "Programación",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: true,
  },
  {
    title: "Reimpresión",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
  },
  {
    title: "Indicadores",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
  },
  {
    title: "Exportar",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
  },
  {
    title: "Historial",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
  },
  {
    title: "Prueba",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
  },
];
