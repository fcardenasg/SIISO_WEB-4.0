import { Switch } from "@mui/material";
import React from "react";
import { Control, Controller } from "react-hook-form";

interface Props {
  name: string;
  control: Control<any, object>;
  defaultValue: boolean;
  label: string;
  errorMessage?: string;
}

const InputCheck: React.FC<Props> = ({
  control,
  name,
  label,
  errorMessage,
  defaultValue,
}) => {
  return (
    <div className="mb-4">
      <div className="flex flex-row justify-between items-center bg-white border border-gray-300 rounded px-3">
        <span className="text-gray-700 text-xs font-montserrat">{label}</span>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => <Switch {...field} />}
        />
      </div>
      <span className="text-xs text-red-500"> {errorMessage}</span>
    </div>
  );
};

export default InputCheck;