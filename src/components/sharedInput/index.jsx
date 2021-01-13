import React from "react";
// import { TextField } from "@material-ui/core";
import { SharedInputElement } from "./style.js";

function SharedInput({
  width,
  height,
  label,
  name,
  _inputRef,
  _error,
  _helperText,
  value,
  _onChange,
}) {
  return (
    <>
      <SharedInputElement
        width={width}
        height={height}
        margin="normal"
        label={label}
        variant="outlined"
        name={name}
        inputRef={_inputRef}
        error={_error}
        helperText={_helperText}
        value={value}
        onChange={_onChange}
      />
    </>
  );
}

export default SharedInput;
