import React from "react";

interface Props {
  text: string;
  onPress: () => void;
}

export const ButtonPrimary: React.FC<Props> = ({ text, onPress }) => {
  return (
    <button
      onClick={onPress}
      className="w-full rounded h-10 text-xs text-white font-semibold font-montserrat bg-red-1"
    >
      {text}
    </button>
  );
};
