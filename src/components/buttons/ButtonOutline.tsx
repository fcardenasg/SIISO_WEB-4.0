import React from "react";

interface Props {
  text: string;
  onPress: () => void;
}

export const ButtonOutline: React.FC<Props> = ({ text, onPress }) => {
  return (
    <button
      onClick={onPress}
      className="w-full rounded h-12 text-red-1 font-semibold font-montserrat"
    >
      <span className="text-xs">{text}</span>
    </button>
  );
};
