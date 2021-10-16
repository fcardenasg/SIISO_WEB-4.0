import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  url: string;
}

export const ButtonLinkLogin: React.FC<Props> = ({ children, url }) => {
  return (
    <div
      className="
      flex flex-shrink
      flex-1
      text-xs
      font-semibold
      bg-white
      py-2
      shadow
      items-center
      justify-center
      rounded-lg
      gap-3
      text-gray-700
      font-montserrat
      hover:bg-red-1
      hover:text-white lg:min-w-min
    "
    >
      <Link to={url}>{children}</Link>
    </div>
  );
};
