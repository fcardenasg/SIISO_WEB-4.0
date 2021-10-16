import React from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import DatePicker from "@mui/lab/DatePicker";
import { TextField } from "@mui/material";

interface Props {
  name: string;
  control: Control<any, object>;
  defaultValue: Date | null;
  label: string;
  rules?: RegisterOptions;
  errorMessage?: string;
}

const InputDate: React.FC<Props> = ({
  name,
  control,
  defaultValue,
  label,
  rules,
  errorMessage,
}) => {
  return (
    <div className="mb-4">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <DatePicker
            label={label}
            { ...field }
            renderInput={(params) => (
              <TextField
                {...params}
                margin="none"
                size="small"
                // inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                className="w-full bg-white text-xs"
              />
            )}
          />
        )}
      />
      <span className="text-xs text-red-500"> {errorMessage}</span>
    </div>
  );
};

export default InputDate;
