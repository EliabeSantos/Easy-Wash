import { SharedButton } from "./style.js";
const DefaultButton = ({ name,type,width,height, _func }) => {
  return (
    <SharedButton
      className="default-button"
      variant="outlined"
      color="primary"
      onClick={_func}
      width={width}
      type={type}
      height={height}
    >
      {name}
    </SharedButton>
  );
};

export default DefaultButton;
