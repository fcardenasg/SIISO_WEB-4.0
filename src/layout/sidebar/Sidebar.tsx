import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png";

export interface ItemSidebar {
  url: string;
  label: string;
  icon: React.ReactNode;
}

interface Props {
  items: ItemSidebar[];
}

export const Sidebar: React.FC<Props> = ({ items }) => {
  const location = useLocation();
  return (
    <div className="min-h-screen w-64 bg-white shadow flex flex-col px-3">
      <div className="w-full flex justify-center">
        <img src={logo} alt="" className="h-28 w-28 my-6 object-center" />
      </div>

      {items.map((item) => (
        <Link to={item.url} key={item.url}>
          <div
            className={`w-full p-3 rounded-2xl flex items-center my-2 ${
              item.url === location.pathname ? "bg-red-50" : ""
            }`}      
          >
            <div className="flex flex-row items-center gap-3 text-xs">
              {item.icon}
              <span className="font-montserrat font-normal ">{item.label}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
