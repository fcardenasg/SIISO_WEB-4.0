import { TextField } from "@material-ui/core";
import React from "react";
import {
  Control,
  Controller,
  RegisterOptions,
  EventType,
} from "react-hook-form";

interface Props {
  name: string;
  control: Control<any, object>;
  defaultValue: string;
  label: string;
  rules?: RegisterOptions;
  errorMessage?: string;
  isPassword?: boolean;
  onChangeInput?: ()=>void;
}

export const InputText: React.FC<Props> = ({
  name,
  control,
  defaultValue,
  label,
  rules,
  errorMessage,
  isPassword,
  onChangeInput
}) => {
  return (
    <div className="mb-4">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <TextField
          {...field}
          error={errorMessage ? true : false}
            onChange={onChangeInput}
            variant="outlined"
            label={label}
            className="w-full bg-white text-xs rounded"
            color="primary"
            type={isPassword ? "password" : "text"}
            margin="none"
            size="small"
            inputProps={{ style: { fontSize: 14 } }}
            InputLabelProps={{ style: { fontSize: 14 } }}
          />
        )}
      />
      <span className="text-xs text-red-500"> {errorMessage}</span>
    </div>
  );
};
