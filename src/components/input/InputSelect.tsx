import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";

export interface SelectOptions {
  value: string;
  label: string;
}

interface Props {
  name: string;
  control: Control<any, object>;
  defaultValue: string;
  label: string;
  rules?: RegisterOptions;
  errorMessage?: string;
  options: SelectOptions[];
}

const InputSelect: React.FC<Props> = ({
  name,
  control,
  defaultValue,
  rules,
  errorMessage,
  label,
  options,
}) => {
  return (
    <div className="mb-4">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <FormControl
            className="w-full bg-white"
            variant="outlined"
            size="small"
            error={errorMessage ? true : false}
          >
            <InputLabel id="demo-simple-select-label" sx={{ fontSize: 14 }}>
              {label}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              {...field}
              label={label}
              sx={{ fontSize: 14 }}
            >
              {options.map((option) => (
                <MenuItem value={option.value}>
                  <span className="font-montserrat text-xs">
                    {option.label}
                  </span>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />
      <span className="text-xs text-red-500"> {errorMessage}</span>
    </div>
  );
};

export default InputSelect;
