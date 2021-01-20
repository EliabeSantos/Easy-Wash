import React from "react";
// import { TextField } from "@material-ui/core";
import { SharedInputElement } from "./style.js";

function SharedInput({
  width,
  height,
  label,
  name,
  _inputRef,
  _onChange,
  _error,
  _helperText,
  value,
  id,
  margin,
  _type,
  _min,
  _max,
  _minLength,
  _maxLength,
  _defaultValue,
}) {
  return (
    <>
      <SharedInputElement
        id={id}
        width={width}
        height={height}
        margin={margin}
        variant="outlined"
        label={label}
        name={name}
        value={value}
        inputRef={_inputRef}
        error={_error}
        helperText={_helperText}
        onChange={_onChange}
        type={_type}
        InputProps={{
          inputProps: {
            min: _min,
            max: _max,
            minLength: _minLength,
            maxLength: _maxLength,
          },
        }}
        defaultValue={_defaultValue}
      />
    </>
  );
}

export default SharedInput;
