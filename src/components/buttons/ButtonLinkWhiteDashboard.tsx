import React from "react";

interface Props {
  children: React.ReactNode;
}

export const ButtonLinkLogin: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-1 flex-row text-sm font-semibold uppercase bg-white px-6 py-5 shadow w-64 items-center justify-center rounded-lg gap-3 text-gray-700 font-montserrat hover:bg-red-1 hover:text-white">
      {children}
    </div>
  );
};
