import { ArrowRight } from "@mui/icons-material";
import React from "react";
import Tooltip from "@mui/material/Tooltip";

interface Props {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onPress?: () => void
}

export const ButtonLinkDashboard: React.FC<Props> = ({
  title,
  subtitle,
  icon,
  onPress,
}) => {
  return (
    <Tooltip title={subtitle}>
      <button onClick={onPress}>
        <div className="bg-gray-500 h-24 flex flex-row flex-1 rounded-xl shadow text-white font-montserrat  p-2 hover:bg-red-1 hover:text-white hover:shadow-lg cursor-pointer">
          <div className="flex flex-col flex-1 justify-end flex-wrap">
            <span className="text-sm font-montserrat">{title}</span>
          </div>
          <div className="flex flex-col justify-between items-center">
            {icon}
            <ArrowRight />
          </div>
        </div>
      </button>
    </Tooltip>
  );
};
