import React from "react";
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
  margin = "normal",
  _type,
  _min,
  _max,
  _minLength,
  _maxLength,
  _defaultValue,
  _id,
  rows,
}) {
  return (
    <>
      <SharedInputElement
        rows={rows}
        multiline
        id={_id}
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
