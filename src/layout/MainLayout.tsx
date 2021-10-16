import { Analytics, AssignmentInd, Build, Dvr, Home } from "@mui/icons-material";
import React from "react";
import colors from "../styles/colors";
import { Header } from "./header/Header";
import { ItemSidebar, Sidebar } from "./sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const itemsMenu: ItemSidebar[] = [
  {
    label: "Inicio",
    url: "/home",
    icon: <Home sx={{ color: colors.primary }} />,
  },
  {
    label: "Parametrización",
    url: "/parameterization",
    icon: <Build sx={{ color: colors.primary }} />,
  },
  {
    label: "Procesos",
    url: "/process",
    icon: <Dvr sx={{ color: colors.primary }} />,
  },
  {
    label: "Informes",
    url: "/analytics",
    icon: <Analytics sx={{ color: colors.primary }} />,
  },
  {
    label: "Administración",
    url: "/admin",
    icon: <AssignmentInd sx={{ color: colors.primary }} />,
  },
];

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row flex-1 w-full h-screen">
      <div>
        <Sidebar items={itemsMenu} />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="px-5">
          <Header />
        </div>
        <div className="px-10">
          <div className="pt-4 overflow-auto">{children}</div>
        </div>
        
      </div>
    </div>
  );
};
