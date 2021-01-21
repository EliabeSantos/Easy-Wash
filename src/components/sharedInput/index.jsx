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
  rows
}) {
  return (
    <>
      <SharedInputElement
<<<<<<< HEAD
        tabIndex={1}
        id={id}
=======
        rows={rows}
        multiline
        id={_id}
>>>>>>> a03f375092c332def70d62d109f55b33e70aa5d8
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
