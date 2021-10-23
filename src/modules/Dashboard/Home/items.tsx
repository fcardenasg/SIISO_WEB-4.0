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
  url: string
};

const fontSize = 40;

export const itemsMenu: MenuItem[] = [
  {
    title: "Personal",
    subtitle: "Empleados y contratistas",
    icon: <Person sx={{ fontSize }} />,
    selected: true,
    url: '/personal'
  },
  {
    title: "Atención",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <LocalHospital sx={{ fontSize }} />,
    selected: true,
    url: '/atencion'
  },
  {
    title: "Programación",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: true,
    url: '/programacion'
  },
  {
    title: "Reimpresión",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/reimpresion'
  },
  {
    title: "Indicadores",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/indicadores'
  },
  {
    title: "Exportar",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/exportar'
  },
  {
    title: "Historial",
    subtitle: "TRIAGE, Enfermería, Asesorias, EMO y Paraclinicos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/historial'
  },
];
