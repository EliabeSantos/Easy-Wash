import { SharedButton } from "./style.js";
const DefaultButton = ({ name,width,height, _func }) => {
  return (
    <SharedButton
      className="default-button"
      variant="outlined"
      color="primary"
      onClick={_func}
      width={width}
      height={height}
    >
      {name}
    </SharedButton>
  );
};

export default DefaultButton;
