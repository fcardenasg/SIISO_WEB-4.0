import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import { Control, Controller } from "react-hook-form";
const labelDefault = { inputProps: { "aria-label": "Checkbox demo" } };

interface Props {
  name: string;
  control: Control<any, object>;
  defaultValue: boolean;
  label: string;
  errorMessage?: string;
  sizeCheck: number;
}

const InputCheckBox: React.FC<Props> = ({
  name,
  control,
  defaultValue,
  label,
  errorMessage,
  sizeCheck,
}) => {
  return (
    <div className="mb-4">
      <div className="flex flex-row items-center">
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <Checkbox
              {...labelDefault}
              {...field}
              sx={{
                "& .MuiSvgIcon-root": { fontSize: sizeCheck },
                color: pink[200],
                borderWidth: 1,
                "&.Mui-checked": {
                  color: pink[600],
                },
                padding: 0
              }}
            />
          )}
        />
        <span className="font-montserrat text-xs text-gray-700 ml-2">{label}</span>
      </div>
      <span className="text-xs text-red-500"> {errorMessage}</span>
    </div>
  );
};

export default InputCheckBox;
