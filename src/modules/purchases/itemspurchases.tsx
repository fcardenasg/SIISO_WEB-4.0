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

export const itemsMenupurchases: MenuItem[] = [
  {
    title: "Contratos",
    subtitle: "Registro de contratos",
    icon: <Person sx={{ fontSize }} />,
    selected: true,
    url: '/Contracts'
  },
  {
    title: "Polizas",
    subtitle: "Registro de pólizas",
    icon: <LocalHospital sx={{ fontSize }} />,
    selected: true,
    url: '/Policy'
  },
  {
    title: "Resumen oferta",
    subtitle: "Resumen Oferta Comercial de Servicios",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: true,
    url: '/programacion'
  },
  {
    title: "Administración",
    subtitle: "Costo mensual de gastos administrativos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/programacion'
  },
  
  {
    title: "Nomina",
    subtitle: "Costos mensuales de nomina",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/programacion'
  },
  {
    title: "Gastos",
    subtitle: "Costo mensual de otros gastos de soporte",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/programacion'
  },
  {
    title: "Vehículos",
    subtitle: "Costo mensual de vehículos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/programacion'
  },

  {
    title: "Insumos",
    subtitle: "Costo mensual de insumos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/programacion'
  },
  {
    title: "Equipos",
    subtitle: "Costo mensual de equipos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/programacion'
  },
  {
    title: "Viáticos",
    subtitle: "Costo mensual de viáticos",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/programacion'
  },
  {
    title: "Dotación",
    subtitle: "Estructura de costos de dotación y EPP personal",
    icon: <AccessTimeFilled sx={{ fontSize }} />,
    selected: false,
    url: '/programacion'
  },

];
